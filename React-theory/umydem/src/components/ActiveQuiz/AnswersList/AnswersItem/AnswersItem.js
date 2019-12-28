import React from 'react'
import classes from './AnswersItem.module.css'

const AnswersItem = props => {

    return (
        <li
            className={classes.AnswersItem}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswersItem
