const readline = require('readline');
const { NlpManager } = require('node-nlp');

const trainNlp = require('./train-nlp');

const threshold = 0.8;
const manager = new NlpManager({ languages: ['en'] });

(async () => {
  await trainNlp(manager);

  console.log('Say something!');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  rl.on('line', async (line) => {
    if (line.toLowerCase() === 'quit') {
      rl.close();
      process.exit();
    } else {
      const result = await manager.process(line);
      // console.log(result);
      const answer = result.score > threshold && result.answer ? result.answer : "Sorry, I don't understand";

      console.log(`bot> ${answer}`);
    }
  });
})();
