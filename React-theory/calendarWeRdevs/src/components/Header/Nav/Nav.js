import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <ul className='app-header__links'>
            <li >
                <NavLink to='/'>HOME</NavLink>
            </li>
            <li>
                <NavLink to='/about'>ABOUT US</NavLink>
            </li>
        </ul>
    )
}

export default Nav