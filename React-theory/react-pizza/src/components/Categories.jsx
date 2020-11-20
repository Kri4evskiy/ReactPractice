import React from 'react'

const Categories = React.memo(function Categories({ activeCategory, items, onClickItem }) {

    const onSelectItem = (index) => {
        onClickItem(index)
    }

    return (
        <div className='categories'>
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}
                >
                    Все
                </li>
                {items &&
                    items.map((item, index) => (
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
                            key={`${item}_${index}`}
                        >
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
    )
})

export default Categories
