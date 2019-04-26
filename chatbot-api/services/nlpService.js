const { logger } = require('../utils/logger');
const { manager } = require('../utils/nlpManager');

const { questions } = require('../data/questions/main');
const { answers } = require('../data/answers/main');

exports.trainNlp = async () => {
  // Adds the utterances and intents for the NLP
  questions.map(q => manager.addDocument('en', q.question, q.answer));

  // Train also the NLG
  answers.map(a => manager.addAnswer('en', a.key, a.answer));

  // Train and save the model.
  logger.info('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  logger.info('Trained! (%ds %dms)', hrend[0], hrend[1] / 1000000);

  manager.save('./data/model.nlp', true);
};
