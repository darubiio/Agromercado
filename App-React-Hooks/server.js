const bodyParser = require('body-parser');
var session = require('express-session')
const port = process.env.PORT || 5000;
const express = require('express')
var cors = require('cors')
const app = express()
const db = require('./config/db')

// express-session
app.use(session({ secret: 'shh', resave: true, saveUninitialized: true }))

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});
// db
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'agromercado',
  password: '123123',
  port: 5432,
})
// express-session
app.use(session({ secret: ' ', resave: true, saveUninitialized: true }))
// body-parseer
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// cors
app.use(cors())
// ruta productos
app.get('/main', (req, res) => {
  pool.query('SELECT * FROM productos ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
})
// ruta login
app.post('/login', (req, res) => {
  const { email, psw } = req.body
  pool.query('SELECT * FROM usuarios WHERE email = $1 and psw = $2', [email, psw], (error, results) => {
    if (error) {
      throw error
    }
    if (results.rows.length > 0) {      
      req.session.user = results.rows
      res.send(true)
    } else {
      res.send(false)
    }
  })
})

/**
// busqueda
app.post('/busqueda', (req, res) => {
  const { busqueda } = req.body
  pool.query('SELECT * FROM productos WHERE nombre LIKE $1', [busqueda], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});
// vista detalle
app.post('/busqueda/id', (req, res) => {
  const { id } = req.body
  pool.query('SELECT * FROM productos WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});
 */

app.listen(port, () => console.log(`Bodega app listening on ${port} port!`))