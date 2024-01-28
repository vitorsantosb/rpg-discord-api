const {ExistsUserByEmail, StoreUser} = require('../../repository/user.repository');
const {GetWebUrl} = require('../../service/webUrl.service');
const {ValidateUserEmail} = require('../../service/user.service');
const {UserDto} = require('../../repository/dto/user/user.dto');
const {CreateId} = require('../../config/CreateUUID');
const {CreateHashPassword} = require('../../security/encryption/encryption.utils');
const userController = {
  create: async (req, res) => {
    const { username, password, email } = req.body;

    if(await ExistsUserByEmail(email)){
      return res.status(400).send({
        message: 'User already exists',
        statusCode: 400,
        request: {
          method: 'POST',
          description: 'Trying to register new user failure, user with email already registered',
          url: `${GetWebUrl()}user/register`
        }
      });
    }

    if(!ValidateUserEmail(email)){
      return res.status(400).send({
        message: 'Invalid email',
        statusCode: 400,
        request: {
          method: 'POST',
          description: 'Failure to register new user, email is invalid',
          url: `${GetWebUrl()}user/register`
        }
      });
    }

    const id = CreateId();
    const passwordHashed = await CreateHashPassword(password);
    const user = UserDto(id, username, email, passwordHashed, Date.now());

    await StoreUser(user);

    return res.status(201).send({
      message: 'Successfully',
      statusCode: 201,
      request: {
        method: 'POST',
        description: 'User created successfully',
        url: `${GetWebUrl()}user/register`
      }
    })
  },
  login: async (req, res) => {
    const {email, password} = req.body;


  }
}