const jwt = require('jsonwebtoken')
const passport = require('passport')
const Account = require('../models/user')
const LocalStrategy = require('passport-http-bearer').Strategy

passport.use(new LocalStrategy(
    async function (token, done) {
        const decoded = jwt.verify(token, 'Secret')
        const response = await Account.findById(decoded._id)

        if (!response) { return done(null, false); }
        return done(null, response);
    }
));