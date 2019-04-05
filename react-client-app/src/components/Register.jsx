import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

const Register = (props) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ message, setMessage ] = useState('');

	const onRegister = (e) => {
		e.preventDefault();
		const userData = {
			username,
			password,
		};

		axios
			.post('http://localhost:3300/api/register', userData)
			.then((res) => {
				console.log(res.data);
				props.history.push('/login');
			})
			.catch((err) => {
				setMessage(err.message);
				setTimeout(() => {
					setMessage('');
				}, 3000);
			});
	};

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>REGISTER</h1>
			<Form onSubmit={onRegister}>
				<input
					placeholder="username"
					onChange={(e) => setUsername(e.target.value)}
					value={username}
					name="username"
				/>
				<input
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					name="password"
				/>
				<button type="submit">Register</button>
			</Form>
			<p style={{ textAlign: 'center' }}>
				<Link to="/login">Already have a account?</Link>
			</p>
			<div>{message}</div>
		</div>
	);
};

export default withRouter(Register);

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
