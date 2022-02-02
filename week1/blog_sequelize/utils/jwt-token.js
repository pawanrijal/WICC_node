var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const passport = require("passport");
const UserService = require("../service/blogService");
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

const jwt = new JwtStrategy(opts, function (jwt_payload, done) {
  console.log(jwt_payload);
  let id = jwt_payload.sub;
  console.log(id);
  try {
    const found_user = UserService.findUserById(id);
    //   //  function (err, user) {
    //     if (err) {
    //       return done(err, false);
    //     }
    //     console.log(user);
    //     if (user) {
    //       return done(null, user);
    //     } else {
    //       return done(null, false);
    //     }
    //   });
    if (found_user) {
      return done(null, found_user);
    }
    return done(null, false);
  } catch (err) {
    console.log(err);
  }
});
module.exports = (passport) => {
  passport.use(jwt);
};
