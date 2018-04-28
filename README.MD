# nodejs-api-boilerplate

My personal boilerplate for a RESTFUL Node API

Work in progress!

### Preinstalled dependencies

This boilerplate has some dependencies already installed : 

* Express
* Mongoose
* body-parser
* dotenv

### Dotenv

This boilerplate expects some enviroment variables that must be in .env file in root folder. 

This is an example of a .env file that this boilerplate requires:

```

PORT=3000 //Port that API will use
DB_HOST=localhost //Database host
DB_PORT=27017  //Database port
DB_NAME=example //Database name

```


### Conding style

This repository already contains a eslint file. If you don't want to follow it, just delete the .eslintc.json from the root folder