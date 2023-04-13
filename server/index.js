const express = require('express');
const mysql = require('mysql');
const app = express();

const cors = require('cors')
app.use(cors())

app.use(express.json())


const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"loginformdb",
});

app.post('/create', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    const mobile = req.body.mobile
    const address = req.body.address

    db.query('INSERT INTO registrationForm (name, email, mobile, address) VALUES (?,?,?,?)', 
    [name, email, mobile, address], 
    (err,result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values Inserted")
        }
    }
    );
})

app.listen(3001, () => {
    console.log("Serving is running on port 3001")
});
