import React from 'react'
import { getPageArray } from '../../../utils/pages'

export default function Pagination({totalPages, page, changePage}) {
let pagesArray = getPageArray(totalPages)
  return (
    <div className='page__wraper'>
    {pagesArray.map(p => 
        <span 
          onClick={() => changePage(p)}
          key={p} 
          className={page === p ? 'page__current' : 'page'}>
              {p}
        </span>
    )}
</div>
  )
}
