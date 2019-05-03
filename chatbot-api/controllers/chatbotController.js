const { logger } = require('../utils/logger');
const { manager } = require('../utils/nlpManager');

const THRESHOLD = 0.8;

/* API Response */
exports.welcomeMessage = (request, response) => {
  logger.info(`${request.method} ${request.url}`);

  const responseObj = {
    answer: 'Hi, how may I assist you today?'
  };

  response.set('Content-Type', 'application/json');
  response.send(JSON.stringify(responseObj));
};

exports.generateAnswer = async (request, response) => {
  if (request.body.question && request.body.question !== '') {
    logger.info(`${request.method} ${request.url}`, { params: JSON.stringify(request.body) });
    const result = await manager.process(request.body.question);

    const responseObj = {
      answer: result.score > THRESHOLD && result.answer ? result.answer : "Sorry, I don't understand"
    };

    logger.info(`Response to ${request.method} ${request.url}`, { params: JSON.stringify({ answers: result.intent }) });

    response.set('Content-Type', 'application/json');
    response.send(JSON.stringify(responseObj));
  } else {
    logger.error(`${request.method} ${request.url} - Not enough parameters`);

    response.writeHead(500, 'Internal Server Error');
    response.end();
  }
};
