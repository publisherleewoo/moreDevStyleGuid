import React from "react"
import Todo from "./Todo"
import { connect } from "react-redux"
import { toggleTodo } from "../actions"

const TodoList = (props) => {
  console.log(props)
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
  return state.todo
}

export default connect(mapStateToProps)(TodoList)
