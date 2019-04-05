import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { withRouter } from 'react-router-dom';
import axiosWithAuth from '../axios/axios';
import User from './User';

const Users = (props) => {
	const [ users, setUsers ] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get('http://localhost:4000/api/users/departament')
			.then((users) => {
				//console.log(users.data);
				setUsers(users.data);
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
			<h2>List of Users</h2>
			<button onClick={onLogout}>Logout</button>
			{users.map((user) => <User key={user.id} username={user.username} departament={user.departament} />)}
		</div>
	);
};

export default withRouter(Users);
