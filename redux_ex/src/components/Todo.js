import React from "react"

const Todo = ({ onClick, completed, text }) => {
  console.log(text, completed)
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
  )
}

export default Todo
