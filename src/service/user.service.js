const Validator = require('email-validator');

function ValidateUserEmail(email) {
  return Validator.validate(email);
}

module.exports = {
  ValidateUserEmail
};
