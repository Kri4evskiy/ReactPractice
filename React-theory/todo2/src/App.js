import React from 'react';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faTrash)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
  }

  addItem(e) {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key)
    this.setState({
      items: filteredItems
    })
  }

  setUpdate(text, key) {
    const items = this.state.items
    items.map(item => {
      if(item.key === key) {
        item.text = text
      }
      this.setState({
        items
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <header>
          <form id='todoForm' onSubmit={this.addItem}>
            <input
              type='text'
              placeholder='Введите текст'
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type='submit'>Добавить</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate = {this.setUpdate}
        />
      </div>
    )
  }
}

export default App;
