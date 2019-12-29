import React from 'react'
import classes from './AnswersItem.module.css'

const AnswersItem = props => {
    const cls = [classes.AnswersItem]

    if (props.state) {
        cls.push(classes[props.state])
    }
    return (
        <li
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswersItem
