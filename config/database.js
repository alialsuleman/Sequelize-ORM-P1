const sequlize  = require ('sequelize') ;
require ('dotenv').config();
const env = process.env.NODE_ENV||"development" ;
const config = require("./config")[env]  ;


module.exports = new sequlize (
    config.database ,
    config.username ,
    config.password ,
    config 
)