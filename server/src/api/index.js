// Service Layer -> is for the business logic
require('dotenv').config();
const express = require('express');

const dbCon = require('../database/db.js');
const app = express();
const DB = require('../database/db.js');
const PORT = process.env.PORT;
const dbCred = process.env.dbCred;

let db = new DB();

app.post('/getdata', (req, res) => {

    console.log('inside the api call');

    let conn = db.getConnection(dbCred);
    conn.connect();
    conn.query('select * from user_data', (err, data) => {

        if (err){
            console.log(err);
        }
        else{

            console.log(data);
            res.json({userdata : data});

        }

    });

    conn.end();

    
});


app.post('/getFiltered', (req, res) =>{

    let conn = db.getConnection(dbCred);

    conn.connect();
    conn.query('select * from user_data where name="ethan"', (err, data) => {

        if (err){
            console.log(err);
        }
        else{

            console.log(data);
            res.json({userdata : data});

        }

    });

    conn.end();

})

app.listen(PORT,() => {

    console.log('Listening to the port ' + PORT);

});