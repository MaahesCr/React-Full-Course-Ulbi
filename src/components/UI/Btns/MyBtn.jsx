import React from 'react'
import classes from './MyBtn.module.css'

export default function MyBtn({children, ...props}) {
  return (
    <button {...props}  className={classes.myBtn}>
        {children}
    </button>
  )
}


