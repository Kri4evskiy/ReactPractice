// https://github.com/airbnb/enzyme

// ...сперва устанавливаем npm-пакеты:
// npm i enzyme
// npm i enzyme-adapter-react-16
// npm i react-test-rendered
// -----------------------------------
// ...после настройки теста запускаем npm test
//
import React from 'react'

import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'
import Character from './Character'

configure({
  adapter: new Adapter()
})

describe('<App />', () => {

  //для оптимизации кода
  beforeEach(() => {
  let wrapper = shallow(<App />)
  })

  it('Should render 3 characters in light side', () => {
    // wrapper = shallow(<App />)

    expect(wrapper.find(Character)).toHaveLenght(3)

  })

  it('Should render 2 characters in dark side', () => {
    // const wrapper = shallow(<App side={'dark'}/>)

    wrapper.setProps({
      side: 'dark'
    })
    expect(wrapper.find(Character)).toHaveLenght(2)

  })

})
