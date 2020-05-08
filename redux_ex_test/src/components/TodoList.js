import React from "react"
import { connect } from "react-redux"
import Todo from "./Todo"
import { toggleTodo } from "../actions/todo"
import store from "./../store/index"

const TodoList = (props) => {
  console.log(store.getState())
  const clickHandler = (index) => {
    props.dispatch(toggleTodo(index))
  }
  return (
    <ul>
      {props.list.map((todo, index) => (
        <Todo
          key={index}
          {...todo}
          clickHandler={() => {
            clickHandler(index)
          }}
        ></Todo>
      ))}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return state.todo
}

export default connect(mapStateToProps)(TodoList)
