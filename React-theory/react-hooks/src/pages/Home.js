import React, { Fragment } from 'react'
import { Search } from '../components/Search'
import { Card } from '../components/Card'

export const Home = () => {
    const cards = new Array(15)
    .fill( " " )
    .map((_, i) => i)

    return (
        <Fragment>
            <Search />
            <div className='row'>
                {cards.map(card => {
                    return (
                <div className='col-sm-4 mb-4' key={card}>
                    <Card />
                </div>
                )
            })}
            </div>
        </Fragment>
    )
}
