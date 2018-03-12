var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/xxx');

var userSchema = new mongoose.Schema({
	name: String,
	password: String
});

//添加
//这里面的这个methods是固定的 代表添加实例方法
userSchema.methods.addUser = function(user, callback) {
	this.name = user.name;
	this.password = user.password;
	this.save(callback);
}


//这里面的users是数据库的一个集合
var User = mongoose.model('users', userSchema);

module.exports = User;