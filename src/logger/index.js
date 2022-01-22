const winston = require('winston')

const level = process.env.NODE_ENV === "production" ? "error" : "debug";
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ level:level }),
        new winston.transports.File({ filename: 'debug.log', level: "debug" }),
      ],
})

module.exports = logger;