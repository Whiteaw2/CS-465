const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const crypto = require('crypto');

passport.use(new LocalStrategy ({
    usernameField: 'email'
},
(username, password, done) => {
    User.findOne({ email: username })
        .then(user => {
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            if (!user.validPassword(password)) {
                var hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex');
                //console.log('Stored Salt:', user.salt);
                //console.log('Stored Hash:', user.hash);
                //console.log('Computed Hash for Given Password:', hash);
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, user);
        })
        .catch(err => {
            //console.error('Error during authentication: passport.js', err);
            return done(err);
        });
}));

