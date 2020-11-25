import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import uuid from 'react-uuid'

import { Categories, SortPopup, PizzaBlock } from '../components'
import LoadingBlock from '../components/PizzaBlock/LoadingBlock'

import { setCategory, setSortBy } from '../redux/actions/actionFilters'
import { fetchPizzas } from '../redux/actions/actionPizzas'
import { addPizzaToCart } from '../redux/actions/actionCart'

const categoriesNames = [
  'Мясные',
  'Вегатарианские',
  'Гриль',
  'Острые',
  'Закрытые',
]

const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
]

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { categories, sortBy } = useSelector(({ filters }) => filters)

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, categories))
  }, [categories, sortBy])

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])
  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const handleAddPizzaToCart = (obj) => {
      dispatch({
        type: 'ADD_PIZZA_CART',
        payload: obj
      })
  }

  const pizzaBlockMaped = () => {
    return items.map((obj) => (
      <PizzaBlock onClickAddPizza={handleAddPizzaToCart} key={obj.id} addedCount={cartItems[obj.id] && cartItems[obj.id].length} {...obj} />
    ))
  }
  const loadingBlockMaped = () => {
    const blocks = []
    for (let i = 0; i < 12; i++) {
      blocks.push(<LoadingBlock key={uuid()} />)
    }
    return blocks.map((block) => block)
  }

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={categories}
          onClickCategory={onSelectCategory}
          items={categoriesNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortPopup={onSelectSortType}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded ? pizzaBlockMaped() : loadingBlockMaped()}
      </div>
    </div>
  )
}

export default Home
