import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories, SortPopup, PizzaBlock } from '../components'

import { setCategory } from '../redux/actions/actionFilters'

const categoriesNames = [
    'Мясные',
    'Вегатарианские',
    'Гриль',
    'Острые',
    'Закрытые',
]

const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
]

function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)

    const onSelecrCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [dispatch])

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories
                    onClickItem={onSelecrCategory}
                    items={categoriesNames}
                />
                <SortPopup
                    items={sortItems}
                />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
                {items.map((obj) => (
                    <PizzaBlock key={obj.id} {...obj} />
                ))}
            </div>
        </div>
    )
}

export default Home
