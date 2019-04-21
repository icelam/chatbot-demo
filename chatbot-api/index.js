const dotenv = require('dotenv');
const express = require('express');
const portfinder = require('portfinder');
const bodyParser = require('body-parser');
const boxen = require('boxen');
const os = require('os');

// NLP
const { NlpManager } = require('node-nlp');
const trainNlp = require('./utils/train-nlp');

// Route
const router = require('./router');

const app = express();

const manager = new NlpManager({ languages: ['en'] });
global.manager = manager;

dotenv.config();

// Generate welcome message
const welcomeMessage = (port) => {
  const NETWORK_ADDRESS = os.networkInterfaces().en0[1].address;

  const msg = [
    '\x1b[32mServing!\n\n',
    `\x1b[30m- \x1b[1mLocal:\x1b[0m            http://localhost:${port}\n`,
    `- \x1b[1mOn Your Network:\x1b[0m  http://${NETWORK_ADDRESS}:${port}\n`,
    '\n\x1b[90mCopied local address to clipboard!\x1b[30m'
  ];

  console.log(boxen(`${msg[0]}${msg[1]}${NETWORK_ADDRESS ? msg[2] : ''}${msg[3]}`, { padding: 1, borderColor: 'green', margin: 1 }));
};

// Start server
const server = () => {
  portfinder.basePort = parseInt(process.argv[2] || process.env.DEFAULT_PORT, 10);

  portfinder.getPortPromise().then((port) => {
    // defined port is in use
    if (portfinder.basePort !== port) {
      console.log(`\x1b[31m\x1b[1m✘  Port ${portfinder.basePort} is already in use. Server started with port ${port} instead.\x1b[0m\x1b[30m`);
    }

    // Get json encoded post data
    app.use(bodyParser.json());
    app.use(router).listen(port);

    welcomeMessage(port);
  }).catch((err) => {
    console.log(`\x1b[31m\x1b[1m✘  Failed to find available port to start server:\x1b[0m\x1b[30m\n${err}`);
  });
};

(async () => {
  // Train NLP before server start
  await trainNlp(manager);
  server();
})();
