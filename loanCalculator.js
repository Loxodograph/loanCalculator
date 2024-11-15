const READLINE = require('readline-sync');
const MESSAGES = require('./messages.json');
let loopContinue = true;

function prompt(message) {
  console.log(`=> ${MESSAGES[message]}`);
}

prompt('greetingBanner');
prompt('greeting');
prompt('emptyBanner');
prompt('emptyLine');