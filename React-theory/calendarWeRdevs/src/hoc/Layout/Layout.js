import React, { Component } from 'react'
import './Layout.scss'

export default class Layout extends Component {

    render() {

        return (

            <div className='Layout'>

                <main>
                    {this.props.children}
                </main>
                
            </div>
        )
    }
}