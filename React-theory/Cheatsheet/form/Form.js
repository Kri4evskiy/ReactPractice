import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class App extends Component {
    state = {
        text1: '',
        text2: '',
        textarea: '',
        select: '',
        select2: [],
        checkbox: false,
        radio: ''
    }

    ref1 = React.createRef()

    change = (e) => {
        let { name, value, type, selectOptions, checked } = e.target

        if (type === 'select-multiple') {
            value = [...selectOptions].map(o => o.value)
        }

        if (type === 'checkbox') {
            value = checked
        }

        this.setState({ [name]: value })
    }

    submit = (e) => {
        e.preventDefault()
        console.log(this.ref1.current.value)
    }

    render() {
        const { text1, text2, textarea, select, select2, checkbox, radio } = this.state
        return (
            <form onSubmit={this.submit}>
                <input ref={this.ref1} defaultValue='test' />
                <input name='text1' value={text1} onChange={this.change} />
                <input name='text2' value={text2} onChange={this.change} />
                <textarea name='textarea' value={textarea} onChange={this.change} />
                <select name='select' value={select} onChange={this.change}>
                    <option value='1'>Значение 1</option>
                    <option value='2'>Значение 2</option>
                    <option value='3'>Значение 3</option>
                    <option value='4'>Значение 4</option>
                </select>
                <select multiple={true} name='select2' value={select2} onChange={this.change}>
                    <option value='1'>Значение 1</option>
                    <option value='2'>Значение 2</option>
                    <option value='3'>Значение 3</option>
                    <option value='4'>Значение 4</option>
                </select>
                <input type='checkbox' name='checkbox' checked={checkbox} onChange={this.change} />
                <input type='radio' name='radio' value='1' checked={radio === '1'} onChange={this.change} />
                <input type='radio' name='radio' value='2' checked={radio === '2'} onChange={this.change} />
                <button>Отправить</button>
            </form>
        )
    }
}
