const passport= require('passport');
const LocalStrategy= require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const Models= require('./models');

let Users = Models.User;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;  // 

// create local strategy
passport.use(
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
        },
       async (username, password, callback)=>{
            console.log(`${username} ${password}`);
           await Users.findOne({username: username})
            .then((user)=>{
                if(!user){
                    console.log("Incorrect username");
                    return callback(null, false,{
                        message: "Incorrect username and password", 
                    });
                }
                // hash any password entered by user when logging in before compare it to the password stored in the mongoDB 
                if(!user.validatePassword(password)){
                    console.log("Incorrect password");
                    return callback(null, false, {message: "Incorrect password"});
                }
                console.log("Finished");
                return callback(null, user);
            })
            .catch((err)=>{
                if(err){
                    console.error(err);
                    return callback(err);
                }
            })
        }
    )
);

// create JWT strategy
passport.use(new JWTStrategy(
    {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),   // JWT is extracted from the header of the HTTP reques
    secretOrKey: 'your_jwt_secret'    //  verifies the signature of the JWT
    },
    async (jwtPayload, callback)=>{
        return await Users.findById(jwtPayload._id)
        .then((user)=>{
            return callback(null, user);
        })
        .catch((err)=>{
            return callback(err);
        });
    }
)
);