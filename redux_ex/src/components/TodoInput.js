import React, { useRef } from "react"
import { addTodo } from "../actions"
import { connect } from "react-redux"

const TodoInput = ({ dispatch }) => {
  let inputRef = useRef(null)
  const clickHandler = (e) => {
    const input = inputRef.current
    dispatch(addTodo(input.value))
    input.value = ""
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={clickHandler}>CLICK</button>
    </div>
  )
}

export default connect()(TodoInput)
