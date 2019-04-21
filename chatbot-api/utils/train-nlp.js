// const fs = require('fs');

const { questions } = require('../data/questions/main');
const { answers } = require('../data/answers/main');

module.exports = async function trainNlp(manager) {
  /* if (fs.existsSync('./model.nlp')) {
    manager.load('../data/model.nlp');
    return;
  } */

  // Adds the utterances and intents for the NLP
  questions.map(q => manager.addDocument('en', q.question, q.answer));

  // Train also the NLG
  answers.map(a => manager.addAnswer('en', a.key, a.answer));

  // Train and save the model.
  console.log('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained! (%ds %dms)', hrend[0], hrend[1] / 1000000);

  manager.save('./data/model.nlp', true);
};
