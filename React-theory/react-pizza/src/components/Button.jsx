import React from 'react'
import classNames from 'classnames'

export default function Button({ onClick, className, outline, children }) {
    let btnClass = classNames('button', className, {
        'button--outline': outline,
    })
    return (
        <button 
            onClick={onClick}
            className={btnClass}
        >
            {children}
        </button>)
}
