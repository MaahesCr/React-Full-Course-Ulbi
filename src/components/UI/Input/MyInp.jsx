import React from 'react'
import classes from './MyInp.module.css'

export default function MyInp(props) {
  return (
    <input
    className={classes.MyInput}
        {...props}
    />
  )
}
