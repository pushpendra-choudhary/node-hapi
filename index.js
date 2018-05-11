'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const db = require('./configs/db');

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes:{cors:true}
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

    await server.register(require('./plugins/user'))

    await server.register([Inert,
        {
            plugin: require('hapi-pino'),
            options: {
                prettyPrint: false,
                logEvents: ['response']
            }
        },
    ])
  
    
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();