'use strict';

 let controller = require('./handler');
//  let joi = require('joi');



module.exports = {
	pkg:{"name": "user",
        "version": "0.0.1",
        "description": "example locate me feature for micro app",
        "main": "index.js"
       },
	register: async (server, options) => {
	
	  server.route([
		{
		  method: "GET",
		  path: "/api/users",
		  config:{
			auth:false,
			tags: ['api'],
			validate:{}
		},
			handler: controller.getUsers
		},
		{
			method: 'POST',
		    path: '/api/user',
		    config:{
		    	auth:false,
		    	tags: ['api'],
		    	validate:{}
		    },
		    handler: controller.setUser
		}
	  ]);
	
	}
  }

// exports.register = function (server, options, next) {
	
// 	server.route([
// 		{
// 			method: 'GET',
// 		    path: '/api/users',
// 		    config:{
// 		    	auth:false,
// 		    	tags: ['api'],
// 		    	validate:{}
// 		    },
// 		    handler: controller.getUsers
// 		},
// 		{
// 			method: 'POST',
// 		    path: '/user',
// 		    config:{
// 		    	auth:false,
// 		    	tags: ['api'],
// 		    	validate:{}
// 		    },
// 		    handler: controller.setUser
// 		}
// 	]);

//     next();
// };

// exports.register.attributes = {
//     pkg:{"name": "user",
//         "version": "0.0.1",
//         "description": "example locate me feature for micro app",
//         "main": "index.js"
//        }
// };


