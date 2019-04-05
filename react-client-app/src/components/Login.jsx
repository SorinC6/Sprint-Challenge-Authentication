import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

const Login = (props) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const onLogin = (e) => {
		e.preventDefault();
		const userData = {
			username: username,
			password: password
		};
		axios
			.post('http://localhost:3300/api/login', userData)
			.then((res) => {
				console.log(res.data);
				localStorage.setItem('token', res.data.token);
				props.history.push('/jokes');
				//localStorage.setItem('token', res.data.token);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>LOGIN</h1>

			<Form onSubmit={onLogin}>
				<input
					placeholder="username"
					onChange={(e) => {
						e.preventDefault();
						setUsername(e.target.value);
					}}
					value={username}
					name="username"
				/>
				<input
					placeholder="password"
					onChange={(e) => {
						e.preventDefault();
						setPassword(e.target.value);
					}}
					value={password}
					name="password"
				/>
				<button type="submit">Login</button>
			</Form>
			<p style={{ textAlign: 'center' }}>
				<Link to="/register">Don't have a account?</Link>
			</p>
		</div>
	);
};

export default withRouter(Login);

const Form = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	margin: 0 auto;
	align-items: center;
	margin-top: 100px;

	input {
		padding: 20px 50px;
		outline: none;
		font-size: 16px;
	}
	button {
		padding: 10px;
		margin: 5px;
		width: 40%;
		border-radius: 5px;
		outline: none;
	}
`;
