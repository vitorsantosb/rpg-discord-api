const {CreateHashPassword} = require('../../security/encryption/encryption.utils');
const {CreateId} = require('../../config/CreateUUID');
const {UserDto} = require('../../repository/dto/user/user.dto');
const {StoreUser} = require('../../repository/user.repository');

async function CreateRootUserAccount(username,rootEmail, rootPassword, rootRole) {
  const id = CreateId();
  const hashedPassword = await CreateHashPassword(rootPassword);

  const user = UserDto(id, username, rootEmail, hashedPassword, Date.now());
  await StoreUser(user);
  console.log('[Factory] Root user account created successfully');
}

async function CreateRootAdmin(){

  await CreateRootAdmin(process.env.ROOT_USERNAME, process.env.ROOT_EMAIL, process.env.ROOT_PASSWORD, 'administrator');
}

module.exports = { CreateRootUserAccount };
