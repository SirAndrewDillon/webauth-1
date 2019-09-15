const router = require('express').Router()
const bcrypt = require('bcryptjs')

const Users = require('../users/users-model.js')

/* ----------------------- api/auth/register endpoint ----------------------- */
router.post('/register', (req, res) => {
	let user = req.body
	const hash = bcrypt.hashSync(user.password, 10)
	user.password = hash

	Users.add(user)
		.then((saved) => {
			res.status(201).json(saved)
		})
		.catch((error) => {
			res.status(500).json(error)
		})
})

/* ------------------------- api/auth/login endpoint ------------------------ */
router.post('/login', (req, res) => {
	let { username, password } = req.body

	Users.findBy({ username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(password, user.password)) {
				req.session.username = user.username
				req.session.loggedIn = true
				res.status(200).json({
					message: `Hello ${user.username}!`
				})
			} else {
				res.status(401).json({ message: 'You are not Jack!' })
			}
		})
		.catch((error) => {
			res.status(500).json(error)
		})
})

/* ------------------------ api/auth/logout endpoint ------------------------ */
router.get('/logout', (req, res) => {
	req.session.destroy(() => {
		res.status(200).json({ SAD: 'Goodbye Jack!' })
	})
})

module.exports = router
