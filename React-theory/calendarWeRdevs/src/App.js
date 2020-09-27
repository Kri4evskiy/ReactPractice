import React from 'react'
import { Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Header from './components/Header'
import MainPage from './components/MainPage'
import AboutPage from './components/AboutPage'

export default class App extends React.Component {

	render() {
		return (

			<Layout>

				<Header />

				<Route exact path='/' component={MainPage} />
				<Route path='/about' component={AboutPage} />

			</Layout>
		)
	}
}