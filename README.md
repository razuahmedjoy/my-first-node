### workflow

 * 1. npm init
 * 2. it will generate a package.json folder containing project information
 * 
 * --------------------
 * For express    
 * --------------------
 * 
 * npm install express
 * create index.js file
 * configure it according to documentation
 * 
 * 
 * now we should use install nodemon so that server auto restart if any changes occur
 * npm install -g nodemon ( once in a computer )
 * 
 * add two script in package.json file
 * 
 * "start": "node index.js",
 * "start-dev": "nodemon index.js",
 * 
 * 
 *  cors issue ..................
 *  By adding these will allow another server to access api data from this port
 *  var cors = require('cors')
 *  app.use(cors());
 * 
 * 
 * 
 * POST requeSt BODY is undefined...................
 * 
 * app.use(express.json());
 * 
