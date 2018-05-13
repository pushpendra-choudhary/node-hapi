'use strict';

let funcs = {};

const jwt = require('hapi-auth-jwt2');
const User = require('../../models/user');


funcs.validate = async function (decoded, request) {

    
    return findUser(decoded.id).then(data => {

        if(data.status == true){
            return { isValid: true };
        }else{
            return { isValid: false };
        }
    })

    // console.log("data", data);

    // return { isValid: true };
    
}

function findUser(id){

    return new Promise(resolve => {

        User.findOne({ _id: id }, function(error, user) {
            if (error) {
                console.error(error);
                resolve({
                    status: false,
                    error: error
                })
            }

            console.log("auth_data", user);

            resolve({
                status: true,
                users: user.id
            })
        });
    })

}

module.exports = funcs;
