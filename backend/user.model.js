const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNo: {type:Number},
    password : { type: String, required: true },
    email : { type: String, required: true ,unique : true }
});

  
userSchema.methods.generateHash = function(password) {

    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
  
userSchema.methods.validPassword = function(password) {

    return bcrypt.compareSync(password, this.password);
};

User = mongoose.model('User', userSchema);

module.exports = User; 