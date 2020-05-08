import React from "react"
import { connect } from "react-redux"
import { addTodo } from "./../actions/todo"

const TodoInput = (props) => {
  let inputRef = null
  const clickHandler = () => {
    var input = inputRef
    props.dispatch(addTodo(input.value))
    input.value = ""
  }

  return (
    <div>
      <input
        type="text"
        ref={(ref) => {
          inputRef = ref
        }}
      />
      <button
        onClick={() => {
          clickHandler()
        }}
      >
        Click
      </button>
    </div>
  )
}

export default connect()(TodoInput)
