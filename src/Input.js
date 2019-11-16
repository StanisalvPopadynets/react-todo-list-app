import React from 'react';
import styles from './Input.module.css';

export default class Input extends React.Component {
  state = {
    label: ''
  }

  classString = 'add-item-input';

  onChange = (e) => {
    this.setState({label: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.label === '') return;
    this.props.onAddItem(this.state.label);
    this.setState({label: ''});
  }

  render() {
    return (
      <form className={styles[this.classString]} onSubmit={this.onSubmit}>
        <input className={styles.input_text} placeholder='Type in the name of the item' type='text' name='add-todo' onChange={(e) => this.onChange(e)} />
        <input className={styles.add_button} type='submit' value='Add'/>
      </form>
    )
  }
}
