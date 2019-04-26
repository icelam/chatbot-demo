/* Logger */
const path = require('path');
const { createLogger, format, transports } = require('winston');

const LOG_FOLDER = path.resolve(__dirname, '../logs');

const loggerFormat = format.printf(
  ({ level, message, timestamp, params }) => `${timestamp} ${level}: ${message}${params ? ` - ${params}` : ''}`
);

exports.logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
    loggerFormat
  ),
  defaultMeta: { service: 'chatbot-api' },
  transports: [
    new transports.File({ filename: `${LOG_FOLDER}/error.log`, level: 'error' }),
    new transports.File({ filename: `${LOG_FOLDER}/combined.log` }),
    new transports.Console({
      format: format.combine(
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
        format.colorize(),
        loggerFormat
      )
    })
  ]
});
