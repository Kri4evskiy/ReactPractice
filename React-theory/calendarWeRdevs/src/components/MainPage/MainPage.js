import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Calendar from '../Calendar'
import MainBG from '../MainBG'

import './MainPage.scss'

const MainPage = () => {
	
	return (
		<Row className="main-section-row">

			<Col lg={8} className='specific-col-1'>
				<MainBG />
			</Col>

			<Col className='specific-col-2'>
				<Calendar />
			</Col>

		</Row>
	)
}

export default MainPage