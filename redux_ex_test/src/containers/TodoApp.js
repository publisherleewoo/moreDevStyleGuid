import React from "react"
import TodoInput from "../components/TodoInput"
import TodoList from "../components/TodoList"
import VisibleTodo from "../components/VisibleTodo"
import Btn from "../components/Btn"

const TodoApp = (props) => {
  return (
    <div>
      <h1>TodoApp</h1>
      <TodoInput></TodoInput>
      <TodoList></TodoList>

      <hr></hr>
      <Btn></Btn>
      <VisibleTodo></VisibleTodo>
    </div>
  )
}

export default TodoApp
