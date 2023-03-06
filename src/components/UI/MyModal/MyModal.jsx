import React from 'react'
import cl from './MyModal.module.css'

export default function MyModal({children, visable, setVisable}) {

  const rootClasses = [cl.myModal]

  if (visable) {
    rootClasses.push([cl.active])
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisable(false)}>
        <div className={cl.myModalConyent} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}
