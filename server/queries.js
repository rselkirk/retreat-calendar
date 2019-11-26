const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'retreat',
  password: 'password',
  port: 5432,
})

const getGuests = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  });
}

const createGuestInfo = (request, response) => {
  const { api_id, name, flight_info, meal_pref, yoga, detox, massage, breath } = request.body.data

  pool.query('INSERT INTO users (api_id, name, flight_info, meal_pref, yoga, detox, massage, breath) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id', [api_id, name, flight_info, meal_pref, yoga, detox, massage, breath], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Guess info added to id ${results.rows[0].id}!`)
  })
}

module.exports = {
  getGuests,
  createGuestInfo,
}