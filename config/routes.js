const axios = require('axios');
const bcrypt = require('bcryptjs');

const db = require('../database/dbConfig');

const { authenticate, generateToken, jwtKey } = require('../auth/authenticate');

function register(req, res) {
	// implement user registration
	const userData = req.body;
	const hash = bcrypt.hashSync(userData.password, 12);
	userData.password = hash;

	if (userData.username && userData.password) {
		db('users')
			.insert(userData)
			.then((id) => {
				res.status(200).json({
					message: `User: ${userData.username} is registered succesfully`,
					id: id[0]
				});
			})
			.catch((err) => {
				res.status(500).json({ error: 'error trying to register user' });
			});
	} else {
		res.status(400).json({ message: 'please provide username and password for register' });
	}
}

async function login(req, res) {
	// implement user login
	const bodyData = req.body;

	if (bodyData.username && bodyData.password) {
		try {
			const user = await db('users').where({ username: bodyData.username }).first();

			if (user && bcrypt.compareSync(bodyData.password, user.password)) {
				const token = generateToken(user);
				res.status(200).json({
					message: `Welcome ${user.username}, here is the token :D `,
					token: token
				});
			} else {
				res.status(401).json({ message: 'Invalid credentials' });
			}
		} catch (error) {
			res.status(500).json({ error: 'error trying to login user' });
		}
	} else {
		res.status(400).json({ message: 'please provide username and password for login' });
	}
}

function getJokes(req, res) {
	const requestOptions = {
		headers: { accept: 'application/json' }
	};

	axios
		.get('https://icanhazdadjoke.com/search', requestOptions)
		.then((response) => {
			res.status(200).json(response.data.results);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error Fetching Jokes', error: err });
		});
}

module.exports = (server) => {
	server.post('/api/register', register);
	server.post('/api/login', login);
	server.get('/api/jokes', authenticate, getJokes);
};
