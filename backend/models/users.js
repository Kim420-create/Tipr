var UsersSchema = new mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    email : {  type : String, unique : true, required : true },
    password : {  type : String, unique : true, required : true  }
});

UsersSchema.index({email : 1}, {unique : true});
UsersSchema.index({email : 1}, {unique : true});
UsersSchema.pre('save', function(next) {
    const user = this;
    bcrypt.hash(user.password, function (err, hash) {
        if (err) {
            return next (err);
        }
        user.password = hash;
        next();
    })
});

UsersSchema.statics.getUser = function (email) {
    return new Promise((resolve, reject) => {
        this.findOne({email : email}, function (err, user) {
            if (!err) {
                resolve(user);
            } else {
                reject({
                    error : err.message
                });
            }
        });
    });
};

UsersSchema.statics.saveUser = function (user) {
    return new Promise ((resolve, reject) => {
        if (!err) {
            var createdUser = JSON.parse(JSON.stringify(result._doc));
            resolve(createdUser);
        } else {
            reject ({
                error : err.message
            })
        }
    })
};

UsersSchema.statics.getUser = function (query) {
    return new Promise ((resolve, reject) => {
        this.find(query).select({
            email : 1
        }) .then((result) => {
            resolve(result)
        }). catch(err => reject(err))
    });
};

var Users = mongoose.model('Users', UsersSchema, 'users');
module.exports = {
    Users : Users
};