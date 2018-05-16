# node-hapi

Hapi is a plugin based framework for node.js applications. This is a demo example which uses mongo database and sophisticated authentication using jwt(jsonwebtoken).

Following packages are used till now:
1) hapi : server framework 
2) hapi-auth-jwt2: jwt authentication
3) jsonwebtoken: jwt creation
3) inert: serves static page
4) joi: object schema validation
5) mongoose: ODM for mongoDB
6) boom: HTTP-friendly error objects.


Flow:
APIs which are developed till now.
1) /api/signup (Here you have to provide name, email and password it responds with jwt token else through an error for missing fields)
2) /api/signin (provide email and password it will look into the database if user exists it will respond with jwt token)
3) /api/users  (list all the users, it requires jwt token in headers else throw a authorization error)


### How to run?
First you have to install and run mongodb server which you can find on following link.
https://docs.mongodb.com/manual/installation/


Once your mongo server up and run do following: 
git clone https://github.com/pushpendra-spartan/node-hapi.git
cd node-hapi
npm install
node index.js

that's it your node server is on localhost now. You can test all the APIs from postman. 



