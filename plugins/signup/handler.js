let funcs = {};
// let https = require("https");
const jwt = require('jsonwebtoken');
const Boom = require('boom');

// routes.js
const User = require('../../models/user');
// let requestLib = require("request");

funcs.signIn = async (request, h) => {

    // console.log("payload", request.payload);
    

    return login(request.payload.email, request.payload.password).then(data => {

        if(data.status == false){
            return h.response(Boom.unauthorized(data.error))
        }
         return h.response({
            data: data
        })
    })
};

funcs.signUp = async (request, h) => {

    
 //   console.log("payload", request.payload);

    return register(request.payload.name, request.payload.email, request.payload.password).then(data => {
         return h.response({
            data:data
        })
    })
 };



 function getJwtToken (id) {
    let secretKey = 'SamplePassword';
  
    return jwt.sign({
      id: id
    }, secretKey, {expiresIn: '18h'});
  }


 function login(email, password){

    return new Promise(resolve => {
      
          User.findOne({'email': email}, function (err, user) {
            if (err) {
                console.error(error);
                resolve({
                    status: false,
                    error: error
                })
            }

            if(user != null){
                if(user.password != password){
                    resolve({
                        status: false,
                        error: "password wrong"
                    })
                }else{
                    console.log(user)

                    resolve({
                        status: true,
                        token: getJwtToken(user._id)
                    }) 
                }
            }else{
                resolve({
                    status: false,
                    error: "user doesn't exist, please signup."
                })
            }
            

        });
    })
}

function register(name, email, password){

    console.log("user", name, email, password);

    return new Promise(resolve => {

        user = new User({
            name: name,
            email: email,
            password: password
        })

        console.log("user", user);
        
        user.save(function(error, user) {
            if (error) {
                console.error(error);
                
                resolve({
                    status: false,
                    error: error
                })
            }

            console.error(user);

            resolve({
                status:true,
                token: getJwtToken(user._id)
            })

        })
        
    })
}



module.exports = funcs;