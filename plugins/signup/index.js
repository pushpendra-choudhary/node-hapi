'use strict';

 let controller = require('./handler');
 const Joi = require('joi');



module.exports = {
	pkg:{"name": "signup",
        "version": "0.0.1",
        "description": "example locate me feature for micro app",
        "main": "index.js"
       },
	register: async (server, options) => {
	
	  server.route([
		{
		  method: "POST",
		  path: "/api/signin",
		  options:{
			auth:false,
			tags: ['api'],
			validate: {
                payload: {
                  email: Joi.string().required(),
                  password: Joi.string().min(2).max(200).required()
                }
            }
		},
			handler: controller.signIn
		},
		{
			method: 'POST',
		    path: '/api/signup',
		    options:{
		    	auth:false,
		    	tags: ['api'],
                validate: {
                    payload: {
                      name: Joi.string().required(),
                      email: Joi.string().required(),
                      password: Joi.string().min(2).max(200).required()
                    }
                }
		    },
		    handler: controller.signUp
		}
	  ]);
	
	}
}