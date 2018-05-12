let funcs = {};
let https = require("https");
// routes.js
const User = require('../../models/user');
// let requestLib = require("request");

funcs.getUsers = async (request, h) => {

    return getUsersData().then(data => {
         return h.response({
            data: data
        })
    })
};

funcs.setUser = async (request, h) => {

    return setUserData().then(data => {
         return h.response({
            data:data
        })
    })
 };

 funcs.deleteUsers = (request, h) => {
    return deleteAllusers().then(data => {
        return h.response({
           data:data
       })
   })
 }


 function getUsersData(){

    return new Promise(resolve => {
      
        User.find(function(error, users) {
            if (error) {
                console.error(error);
                resolve({
                    status: false,
                    error: error
                })
            }
            resolve({
                status: true,
                users: users
            })
        });
    })
}


function setUserData() {

    return new Promise((resolve, reject) => {
        const user = new User({
            first_name: "John",
            last_name: "roy",
            designation: "programmer",
            employee_id: "123"
        });
        user.save(function(error, user) {
        if (error) {
            console.error(error);
            
            resolve({
                status: false,
                error: error
            })
        }

        resolve({
            status:true,
            user: user
        })

    })
  })
}

function deleteAllusers() {
    return new Promise(resolve => {
      
        User.collection.drop(function(error, result) {
            if (error) {
                console.error(error);
                resolve({
                    status: false,
                    error: error
                })
            }
            resolve({
                status: true,
                message: result
            })
        });
    })
}



module.exports = funcs;