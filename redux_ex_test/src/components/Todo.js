import React from "react"

const Todo = (props) => {
  return (
    <li
      style={{ textDecoration: props.checked ? "line-through" : "none" }}
      onClick={props.clickHandler}
    >
      {props.text}
    </li>
  )
}

export default Todo
