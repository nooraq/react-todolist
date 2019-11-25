import React, { Component } from 'react'
import './style.css'
import TodoItem from './TodoItem'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  render() {
    return (
      <div className="TodoList">
        <div>
          <input
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick.bind(this)}>提交</button>
        </div>
        <ul>{this.getItems()}</ul>
      </div>
    )
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => {
      return {
        inputValue: value
      }
    })
  }

  handleButtonClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue]
    }))
  }

  handleItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState(() => ({
      list
    }))
  }

  getItems() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          content={item}
          index={index}
          deleteItem={this.handleItemDelete.bind(this)}
          key={item}
        />
        // <li key={index} onClick={this.handleItemDelete.bind(this, index)}>
        //   {item}
        // </li>
      )
    })
  }
}

export default TodoList
