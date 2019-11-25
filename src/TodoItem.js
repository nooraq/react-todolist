import React, { Component } from 'react'
import propTypes from 'prop-types'

class TodoItem extends Component {
  render() {
    const { content } = this.props
    return <div onClick={this.handleClick.bind(this)}>{content}</div>
  }

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  content: propTypes.string,
  deleteItem: propTypes.func,
  index: propTypes.number
}

export default TodoItem
