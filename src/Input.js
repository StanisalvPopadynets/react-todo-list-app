import React from 'react'

export default class Input extends React.Component {
  state = {
    label: ''
  }

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
    console.log(this.state.label);
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' name='add-todo' onChange={(e) => this.onChange(e)} />
        <input type='submit' value='Add'/>
      </form>
    )
  }
}
