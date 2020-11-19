import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories, SortPopup, PizzaBlock } from '../components'
import LoadingBlock from '../components/PizzaBlock/LoadingBlock'

import { setCategory } from '../redux/actions/actionFilters'
import { fetchPizzas } from '../redux/actions/actionPizzas'

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
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)

    useEffect(() => {
        dispatch(fetchPizzas())
    }, [])

    const onSelectCategory = useCallback(
        (index) => {
            dispatch(setCategory(index))
        },
        [dispatch]
    )

    const pizzaBlockMaped = () => {
        return items.map((obj) => (
            <PizzaBlock key={obj.id} isLoading={true} {...obj} />
        ))
    }

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoriesNames}
                />
                <SortPopup items={sortItems} />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
                {
                isLoaded 
                ? pizzaBlockMaped()
                : Array(12).fill(<LoadingBlock />)
            }
                
            </div>
        </div>
    )
}

export default Home
