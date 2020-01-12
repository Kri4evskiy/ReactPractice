import {combineReducers} from 'redux'
import quizReduser from './quiz'
import createReducer from './create'
import authReducer from './auth'

export default combineReducers({
    quiz: quizReduser,
    create: createReducer,
    auth: authReducer
})
