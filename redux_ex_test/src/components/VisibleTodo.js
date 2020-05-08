import React from "react"
import { connect } from "react-redux"
import Todo from "./Todo"

const VisibleTodo = (props) => {
  return (
    <ul>
      {props.list.map((todo, index) => (
        <Todo key={index} {...todo}></Todo>
      ))}
    </ul>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  if (state.visible === "DONE") {
    return { list: state.todo.list.filter((todo) => todo.checked === true) }
  } else if (state.visible === "noDone") {
    return { list: state.todo.list.filter((todo) => todo.checked === false) }
  } else {
    return state.todo
  }
}

export default connect(mapStateToProps)(VisibleTodo)
