var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	phone: {type: String, required: true, index: {unique: true}},
	token: {type: String, required: false, index: {unique: false}}
})

module.exports = mongoose.model('User', UserSchema)