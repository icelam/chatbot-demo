const { logger } = require('../utils/logger');

exports.notFound = (request, response) => {
  logger.error(`${request.method} ${request.url} - Not Found`);
  response.writeHead(404, 'Not Found');
  response.end();
};
