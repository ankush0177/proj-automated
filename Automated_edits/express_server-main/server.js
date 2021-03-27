// import required modules
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
var bodyParser = require('body-parser');
app.use(cors());
const port = 3300;

// Makes it easier to read JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'register',
  
});

// Get All Car
app.get('/cars', (req, res) => {

  console.log("Fetching all cars ...")

  const sql = 'SELECT * FROM car';
  connection.query(sql, (err, rows) => {
    if (err) throw err;
    console.log('rows', rows);
    res.json(rows);
  });

  console.log('This is after going to the database!');
})


app.get('/car/:vin', (req, res) => {
  console.log('params:', req.params);
  const vin1 = req.params.vin;
  connection.query(
    `SELECT * FROM car WHERE vin = "${vin1}"`, 
    (err, rows) => {
      if (err) throw err;
      res.json(rows);
    });
})

// Login
app.post('/login', (req, res) => {
  console.log('trying to login!')

  connection.query(
    'do the sql!',
    (err, rows) => {
      if (err) throw err;

      if (rows.length !== 1) {
        res.send(true);
      } else {
        res.send(false);
      }
    }
  )
})

// Create a Student
app.post('/register', (req, res) => {
  console.log(`Registering a car ... `);

  console.log('body', req.body);
  

  connection.query(
  `INSERT INTO car (type,make,model,vin,year) VALUES ('${req.body.type}','${req.body.make}','${req.body.model}',"${req.body.vin1}",'${req.body.year}')`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    });
});
app.post('/register1', (req, res) => {
  console.log(`Registering a driver ... `);

  console.log('body', req.body);
  

  connection.query(
  `INSERT INTO driver (name1,email,license,expiration) VALUES ('${req.body.name}','${req.body.email}','${req.body.license}',"${req.body.expiration}")`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    });
});

// Update a Student
app.put('/car/vin', (req, res) => {
  console.log('params:', req.params);
  const vin = req.params.vin;
  console.log("body:", req.body)

  connection.query(
      `UPDATE car SET name = '${req.body.name}', sex = '${req.body.sex}' ` +
      `WHERE id = ${id}`,
      (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
});

// Delete a student
app.delete('/car/:id', (req, res) => {
  console.log(`Delete car with VIN [${req.params.vin}]... `)

  connection.query(
    `DELETE FROM car WHERE vin = "${req.params.id}"`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    });
});

// Listen
// localhost => 127.0.0.1
app.listen(port, () => {
  console.log(`Student app listening at http://localhost:${port}`)
})
