import passportJWT from 'passport-jwt';
import config from '../../../config/env-config.mjs';
import { userDAO } from '../../../model/index.mjs';

const Strategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.SECRET_TOKEN,
    usernameField: config.AUTH_USER_FIELD,
    passwordField: config.AUTH_PASS_FIELD
};

const strategy = new Strategy(options, (jwtPayload, done) => {

    return userDAO.findById(jwtPayload.id)
        .then(user => done(null, user || false))
        .catch(error => done(error, false));
    
});

export default strategy;