const dotenv = require('dotenv');
const express = require('express');
const portfinder = require('portfinder');
const bodyParser = require('body-parser');
const boxen = require('boxen');
const os = require('os');

// NLP
const nlpService = require('./services/nlpService');

// Logger
const { logger } = require('./utils/logger');

// Route
const router = require('./router');

const app = express();

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
      logger.warn(`Port ${portfinder.basePort} is already in use. Server started with port ${port} instead.`);
    }

    // Get json encoded post data
    app.use(bodyParser.json());
    app.use(router).listen(port);

    welcomeMessage(port);
  }).catch((err) => {
    logger.error(`Failed to find available port to start server:\n${err}`);
  });
};

(async () => {
  // Train NLP before server start
  await nlpService.trainNlp();
  server();
})();
