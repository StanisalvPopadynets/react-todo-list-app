import React from 'react';
import styles from './TodoItem.module.css';

export default function TodoItem(props) {
  return (
    <span className={styles.item__content}>
      <span>
        {props.label}
      </span>
      <button 
        className={styles.button_delete}
        type='button'
        onClick={props.onDelete} >
        X
      </button>

    </span>
  )
}
