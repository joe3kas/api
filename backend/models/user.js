const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

UserSchema.pre('save', function (next) {
    if (this.isNew || this.isModified('password')) {
        const document = this;
        bcrypt.hash(document.password, saltRounds, (error, hashedPass) => {
            if (error) {
                next(error);
            } else {
                document.password = hashedPass;
                next();
            }
        })
    } else {
        next();
    }
})

UserSchema.methods .isCorrectPass = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, same) {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    }

    )
}


module.exports = model('User', UserSchema);