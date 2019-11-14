import React from 'react'

export default function TodoItem(props) {
  return (
    <span>
      <span>
        {props.label}
      </span>
      <button 
        type='button'
        onClick={props.onDelete} >
        X
      </button>

    </span>
  )
}
