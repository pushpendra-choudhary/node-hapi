'use strict';

const jwt = require('hapi-auth-jwt2');
let controller = require('./handler');

// jwt auth 

module.exports = {
	pkg:{"name": "auth",
        "version": "0.0.1",
        "description": "jwt auth plugin",
        "main": "index.js"
       },

	register: async (server, options) => {

        server.auth.strategy('jwt', 'jwt',
        { key: 'SamplePassword',          // Never Share your secret key
          validate: controller.validate,            // validate function defined above
          verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
        });
        
        server.auth.default('jwt');
  }
  
}

// bring your own validation function
const validate = async function (decoded, request) {

  return { isValid: true };
};