const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env]

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        try {
            User.findOne({where : {id: jwt_payload.id}}).then((user) => {
                if(user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        } catch(e) {
            return done(null, e);
        }
    }));
}
