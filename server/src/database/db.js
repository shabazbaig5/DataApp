// const mysql = require('mysql');
// // require('dotenv').config();

// // console.log(env);
// let db_passcode = 'ethanHunt';

// // console.log(db_passcode);

// const connectionCarrier = mysql.createConnection({

   
//   host : 'localhost',
//   user : 'root',
//   password : db_passcode,
//   database:'test_db',
//   debug    :  true

// });


// module.exports = () => {

//   return connectionCarrier;

// }

const mysql = require("mysql");

// const db_passcode = 'ethanHunt';

class DB{

    constructor(){
        // super();
    }


    getConnection(db_passcode){

        return mysql.createConnection({

   
            host : 'localhost',
            user : 'root',
            password : db_passcode,
            database:'test_db',
            debug    :  true
            
        });

    }
}

module.exports = DB;