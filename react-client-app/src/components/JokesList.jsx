import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { withRouter } from 'react-router-dom';
import axiosWithAuth from '../axios/axios';

const Users = (props) => {
	const [ jokes, setJokes ] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get('http://localhost:3300/api/jokes')
			.then((jokes) => {
				console.log(jokes.data);
				setJokes(jokes.data);
			})
			.catch((err) => {
				//console.log('rrr');
				//console.log(err);
			});
	}, []);

	const onLogout = () => {
		localStorage.clear();
		props.history.push('/login');
	};

	return (
		<div>
			<button onClick={onLogout}>Logout</button>
			{/* {jokes.map((j) => <Joke key={j.id} username={user.username} departament={user.departament} />)} */}
		</div>
	);
};

export default withRouter(Users);
