import React from 'react'
import  classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={`${classes.Card} ${props.className}`}>{props.children}</div>
        // it will get the content of the props 
    )
}

export default Card