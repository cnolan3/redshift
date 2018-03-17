const bcrypt = require('bcrypt');

'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        username: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {});

    User.associate = (models) => {
    // associations can be defined here
    };

    /**
     * add a user to the database
     *
     * @param    newUser new user data object
     * @param    callback callback that recieves the new user object 
     *           as a parameter
    **/
    User.addUser = (newUser, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                User.create(newUser).then(callback);
            });
        });
    };

    /**
     * compare given password to the stored hash
     *
     * @param    candidate candidate plaintext password
     * @param    hash stored hash to compare to
     * @param    callback  callback the recieves the match status as a
     *           parameter
    **/
    User.comparePassword = (candidate, hash, callback) => {
        bcrypt.compare(candidate, hash, (err, isMatch) => {
            callback(isMatch);
        });
    };
    return User;
};
