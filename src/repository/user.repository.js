const {GetDatabase} = require('../database/database');

async function StoreUser(user){
  const {collections} = await GetDatabase();

  return collections.users.insertOne(JSON.parse(JSON.stringify(user)));
}

async function ExistsUserByEmail(email){
  const {collections} = await GetDatabase();

  return collections.users.countDocuments({email: email});
}

module.exports = {
  StoreUser,
  ExistsUserByEmail
};