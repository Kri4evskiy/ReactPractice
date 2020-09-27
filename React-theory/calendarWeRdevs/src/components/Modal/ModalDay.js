import React from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root');

export default class ModalDay extends React.Component {

	el = document.createElement('div')

	componentDidMount() {
		modalRoot.appendChild(this.el)
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el)
	}

	render() {
		const { children } = this.props

		return ReactDOM.createPortal(
			children,
			this.el
		)
	}
}