import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Drawer.module.css'
import BackDrop from '../../UI/BackDrop/BackDrop'


const links = [
    {to: '/', lable: 'Список', exact: true},
    {to: '/auth', lable: 'Авторизация', exact: false},
    {to: '/quiz-creator', lable: 'Создать тест', exact: false},
]

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.lable}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
        { this.props.isOpen ? <BackDrop onClick={this.props.onClose} /> : null }
            </React.Fragment>
        )
    }
}

export default Drawer
