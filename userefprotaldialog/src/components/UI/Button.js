import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button 
    className={classes.button}
    type={props.type||'button'}
    onClick={props.onClick}
    {...props}//rest operator
    >
      {props.children}</button>
  )
}

export default Button