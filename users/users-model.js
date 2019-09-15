const db = require('../database/dbConfig.js')

module.exports = {
	add,
	find,
	findBy,
	findById
}

/* -------------------------- Finds users logged in ------------------------- */
function find() {
	return db('users').select('id', 'username', 'password')
}

function findBy(filter) {
	return db('users').where(filter)
}

/* ----------------------------- Adds a new user ---------------------------- */
function add(user) {
	return db('users')
		.insert(user)
		.then((ids) => {
			const [id] = ids
			return findById(id)
		})
}

/* --------------------------- Finds a user by Id --------------------------- */
function findById(id) {
	return db('users')
		.where({ id })
		.first()
}
