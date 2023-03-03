import React from 'react'
import MyInp from './UI/Input/MyInp'
import MySelect from './UI/Select/MySelect'

export default function PostFilter({filter, setFilter}) {
  return (
    <div>
    <MyInp
      value={filter.query}
      onChange={e => setFilter({...filter, query: e.target.value})}
      placeholder='Поиск...'
    />
    <MySelect 
      value={filter.sort}
      onChange = {selecredSort => setFilter({...filter, sort: selecredSort})}
      defaultValue='Сортировака по'
      option={[
        {value:'title', name:'По названию'},
        {value:'body', name:'По описанию'},
      ]}
    />
  </div>
  )
}
