function UserDto(id, username, email, hashedPassword, timestamp){
  return {
    id: id,
    username: username,
    email: email,
    hashedPassword: hashedPassword,
    user_games: [],
    characters: [],
    timestamp: timestamp
  }
}

module.exports = {
  UserDto
};