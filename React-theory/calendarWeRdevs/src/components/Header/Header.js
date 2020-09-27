import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Nav from './Nav'

import logo from '../../img/Logo.svg'
import './Header.scss'

const Header = () => {
	return (
		<Row className="app-header">

			<Col className='app-header__logo'>
				<img src={logo} alt='Logo' />
			</Col>

			<Col className='app-header__list'>
				<Nav />
			</Col>

		</Row>
	)
}

export default Header