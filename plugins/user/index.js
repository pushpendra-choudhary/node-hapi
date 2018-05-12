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
		  options:{
			auth:false,
			tags: ['api'],
			validate:{}
		},
			handler: controller.getUsers
		},
		{
			method: 'POST',
		    path: '/api/user',
		    options:{
		    	auth:false,
		    	tags: ['api'],
		    	validate:{}
		    },
		    handler: controller.setUser
		},
		{
			method: 'DELETE',
		    path: '/api/users',
		    options:{
		    	auth:false,
		    	tags: ['api'],
		    	validate:{}
		    },
		    handler: controller.deleteUsers
		}
	  ]);
	
	}
}