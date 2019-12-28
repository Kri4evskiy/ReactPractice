import React from 'react'
import classes from './AnswersList.module.css'
import AnswersItem from './AnswersItem/AnswersItem'

const AnswersList = props => {

    return (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswersItem
                    key={index}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                />
            )
        })}
    </ul>
)
}
export default AnswersList
