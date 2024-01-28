const bcryptjs = require('bcryptjs');
async function VerifyHashPassword(password, passwordToCompare) {
  return new Promise((resolve, reject) => {
    bcryptjs.compare(password, passwordToCompare, (err, result) => {
      if (err) {
        reject(err);
      }
      if (result) {
        resolve(true);
      }
    });
  });
}

async function CreateHashPassword(password) {
  return new Promise((resolve, reject) => {
    bcryptjs.genSalt(10, async function (err, salt) {
      bcryptjs.hash(password, salt, async function (err, hash) {
        if (err) {
          reject(err);
        }
        resolve(hash);
        return hash;
      });
    });
  });
}

module.exports = {CreateHashPassword, VerifyHashPassword};