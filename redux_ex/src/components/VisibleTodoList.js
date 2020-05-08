import React from "react"
import Todo from "./Todo"
import { connect } from "react-redux"
import { toggleTodo } from "../actions"

const VisibleTodoList = (props) => {
  const checkTodo = (index) => {
    props.dispatch(toggleTodo(index))
  }

  console.log(props.list)
  const todoTag = props.list.map((todo, index) => (
    <Todo
      key={index}
      onClick={() => {
        checkTodo(index)
      }}
      {...todo}
    />
  ))

  return <ul>{todoTag}</ul>
}

const mapStateToProps = (state) => {
  console.log(state)
  if (state.visible === "INACTIVE") {
    return { list: state.todo.list.filter((todo) => todo.completed === true) }
  } else if (state.visible === "ACTIVE") {
    return { list: state.todo.list.filter((todo) => todo.completed === false) }
  } else {
    return state.todo
  }
}

export default connect(mapStateToProps)(VisibleTodoList)
