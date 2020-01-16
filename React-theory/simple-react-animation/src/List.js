import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const List = ({ items, onRemove }) => (
    <TransitionGroup component={'ul'}> {/* --- вместо тега <ul></ul> --- */}
        {/* каждый компонент в <TransitionGroup> нужно обернуть в <CSSTransition>*/}
        {items.map(item => (
           <CSSTransition
            classNames = {'os'}
            timeout={750}
            key={item.id}
            >
            <li onClick={() => onRemove(item.id)} > {item.title} </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
)
