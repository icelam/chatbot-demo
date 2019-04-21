const THRESHOLD = 0.8;

/* Logger */
const logger = (reqtMethod, requUrl) => console.log(`\x1b[32m✔  \x1b[35m\x1b[1m${reqtMethod}\x1b[0m \x1b[90m${requUrl}\x1b[30m`);
const errorLog = (reqtMethod, requUrl, reqErr) => console.log(`\x1b[31m✘  \x1b[35m\x1b[1m${reqtMethod}\x1b[0m \x1b[90m${requUrl}\x1b[30m\n${reqErr}`);

/* API Response */
exports.welcomeMessage = () => async (request, response) => {
  logger(request.method, request.url);

  const responseObj = {
    answer: 'Hi, how may I assist you today?'
  };

  response.set('Content-Type', 'application/json');
  response.send(JSON.stringify(responseObj));
};

exports.generateAnswer = () => async (request, response) => {
  logger(request.method, request.url);

  const { manager } = global;

  if (request.body.question && request.body.question !== '') {
    const result = await manager.process(request.body.question);

    const responseObj = {
      answer: result.score > THRESHOLD && result.answer ? result.answer : "Sorry, I don't understand"
    };

    /* setTimeout(() => {
      response.set('Content-Type', 'application/json');
      response.send(JSON.stringify(responseObj));
    }, 10000); */

    response.set('Content-Type', 'application/json');
    response.send(JSON.stringify(responseObj));
  } else {
    errorLog(request.method, request.url, 'Not enough parameters');
    response.writeHead(500, 'Internal Server Error');
    response.end();
  }
};

exports.notFound = () => (request, response) => {
  errorLog(request.method, request.url, 'Not Found');
  response.writeHead(404, 'Not Found');
  response.end();
};
