const {GetDatabase} = require('../database/database');

async function StoreUser(user) {
  const {collections} = await GetDatabase();

  return collections.users.insertOne(JSON.parse(JSON.stringify(user)));
}

async function ExistsUserByEmail(email) {
  const {collections} = await GetDatabase();

  return collections.users.countDocuments({email: email});
}

async function GetUserDataWithEmail(email) {
  const {collections} = await GetDatabase();

  return collections.users.findOne({
      email: email
    },
    {
      user: 1,
    });
}


module.exports = {
  StoreUser,
  ExistsUserByEmail,
  GetUserDataWithEmail
};