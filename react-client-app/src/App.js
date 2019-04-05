import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Register from './components/Register';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Dad Jokes - Sprint Challenge</h1>

				<div>
					<Route path="/register" component={Register} />
					{/* <Route path="/login" component={Login} /> */}
				</div>
			</div>
		);
	}
}

export default App;
