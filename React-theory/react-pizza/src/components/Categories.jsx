import React, { useState } from 'react'

export default function Categories({ items }) {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className='categories'>
            <ul>
                <li className='active'>Все</li>
                {items.map((item, index) => (
                    <li
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${item}_${index}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
