// Pstgres SQL
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'agromercado',
  password: '123123',
  port: 5432,
})

const findUser = (body) => {
  return new Promise(function(resolve, reject) {
    const { email, psw } = body
    pool.query('SELECT * FROM usuarios WHERE email = $1 and psw = $2', [email, psw], (error, results) => {
      if (error) {
        reject(error)
      }
      if (results.rows.length > 0) {
        resolve(true)
      } else { 
        resolve(false)
      }
    })
  })
}

const getProductos = (request, response) => {
  
}

const insertProducto = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body
    pool.query('INSERT INTO productos (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new merchant has been added added: ${results.rows[0]}`)
    })
  })
}

const deleteProducto = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM productos WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Merchant deleted with ID: ${id}`)
    })
  })
}

module.exports = {
  pool,
  findUser,
  getProductos,
  insertProducto,
  deleteProducto,
}