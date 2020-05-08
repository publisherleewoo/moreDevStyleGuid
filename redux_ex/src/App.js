import React from "react"

import "./App.css"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import ControllerButtons from "./components/ControllerButtons"
import VisibleTodoList from "./components/VisibleTodoList"

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
      <ControllerButtons></ControllerButtons>
      <VisibleTodoList></VisibleTodoList>
    </div>
  )
}

export default App
