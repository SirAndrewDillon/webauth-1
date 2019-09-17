import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './components/Nav.css'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

const routing = (
	<Router>
		<div>
			<ul>
				<li>
					<a href='/login' class='round green'>
						Login
						<span class='round'>That is, if you already have an account.</span>
					</a>
				</li>
				<li>
					<a href='/register' class='round red'>
						Sign Up
						<span class='round'>But only if you really, really want to. </span>
					</a>
				</li>
				<li>
					<a href='/' class='round yellow'>
						Home
						<span class='round'>Take a look. This page is totally rad!</span>
					</a>
				</li>
			</ul>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/login' exact component={Login} />
				<Route path='/register' exact component={Register} />
			</Switch>
		</div>
	</Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
