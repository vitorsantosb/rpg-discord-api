const uuid = require('uuid');

function CreateId(){
  return uuid.v4();
}
function ValidateGeneratedId(id){
  return uuid.validate(id);
}

module.exports = {CreateId, ValidateGeneratedId};