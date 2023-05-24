const loggerUrl = 'http://mylogger.io/log';
 
function logger(message) {
  // Send an HTTP request
  console.log(message);
}
 
module.exports.log = logger;
 
// we can export URL as well
// mostly should not be done,
// as it's implementation details
module.exports.LOGGER_URL = loggerUrl;
