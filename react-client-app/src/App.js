import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import JokesList from './components/JokesList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Dad Jokes - Sprint Challenge</h1>
{/* 
				<Route
					exact
					path="/jokes"
					render={(props) =>
						localStorage.getItem('token') ? <JokesList {...props} /> : <Redirect to="/login" />}
				/> */}

				<div>
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
				</div>
			</div>
		);
	}
}

export default App;
