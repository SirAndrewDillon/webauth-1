import React from 'react'
import './Home.css'

const Home = ({ location }) => {
	return (
		<div>
			<code>{location.pathname}</code>
		</div>
	)
}

export default Home
