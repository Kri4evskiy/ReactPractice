import React from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import './app.css'

import styled from 'styled-components'

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const App = () => {

  const data = [
    { label: 'Going to learn React', important: true, id: 'asc' },
    { label: 'That is so good', important: false, id: 'csa' },
    { label: 'I need a break....', important: false, id: 'fve' }
  ]

  return (
    <AppBlock>
      <AppHeader />
      <div className='search-panel d-flex'>
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList 
        posts={data} 
        onDelete={id => console.log(id)}
      />
      <PostAddForm />
    </AppBlock>
  )
}

export default App