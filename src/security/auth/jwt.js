const jwt = require('jsonwebtoken');
function CreateUserAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECURITY_KEY,
      {
        expiresIn: '24h',
      },
      (err, token) => {
        if (err) {
          console.log('[CreateUserAccessToken] ERR :' + err);
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
}

module.exports = {
  CreateUserAccessToken
}