let funcs = {};
let https = require("https");
// routes.js
const User = require('../../models/user');
// let requestLib = require("request");

funcs.getUsers = (request, h) => {

    return getUsersData().then(data => {
        return h.response({
            data: data
        })
    })
};

funcs.setUser = (request, h) => {

    let data = setUserData()

    console.log(data)

    return h.response(data)
 };


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
            console.error(users);

            resolve({
                status: false,
                users: users
            })
        });
    })

    // return new Promise((resolve, reject) => {

    //     User.find(function(error, users) {
    //         if (error) {
    //             console.error(error);
    //             resolve({
    //                 status: false,
    //                 error: error
    //             })
    //         }
    //         console.error(users);

    //         resolve({
    //             status: false,
    //             users: users
    //         })
    //     });
        
    // })
}


function setUserData() {
    const user = new User({
        first_name: "John",
        last_name: "roy",
        designation: "programmer",
        employee_id: "123"
    });
    user.save(function(error, user) {
      if (error) {
          console.error(error);
          return error
      }

      console.error(user);

      return user
    //     status: true,
    //     id: user.id
    // }
    });
}



module.exports = funcs;