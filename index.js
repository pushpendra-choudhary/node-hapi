'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const db = require('./configs/db');

// routes:{cors:true}
const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
        validate: {
          failAction: async (request, h, err) => {
            if (process.env.NODE_ENV === 'production') {
              // In prod, log a limited error message and throw the default Bad Request error.
              console.error('ValidationError:', err.message); // Better to use an actual logger here.
              throw Boom.badRequest(`Invalid request payload input`);
            } else {
              // During development, log and respond with the full error.
              console.error(err);
              throw err;
            }
          }
        }
      }
});

// server.route({
//     method: 'GET',
//     path: '/',
//     handler: (request, h) => {

//         return h.file('./public/hello.html');
//     }
// });

// server.route({
//     method: 'GET',
//     path: '/{name}',
//     handler: (request, h) => {

//         // request.log(['a', 'name'], "Request name");
//         // or
//        // request.logger.info('In handler %s', request.path);

//         return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
//     }
// });

const init = async () => {
    

    // await server.register(require('./plugins/user'))

    await server.register([Inert,
        {
            plugin: require('hapi-pino'),
            options: {
                prettyPrint: false,
                logEvents: ['response']
            }
        },

        require('hapi-auth-jwt2'),
        require('./plugins/auth'),
        require('./plugins/signup'),
        require('./plugins/user')
    ])
  
    
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();