import React from 'react'
import classes from './MyInp.module.css'

export default React.forwardRef(function MyInp(props, ref) {
  return (
    <input
    className={classes.MyInput}
      ref={ref}
      {...props}
    />
  )
})
