import React from "react"

import "./App.css"
import Parent from "./sample/components/Parent"
import Child from "./sample/components/Child"

function App() {
  return (
    <div className="App">
      <Parent>
        <Child></Child>
        <Child></Child>
        <Child></Child>
      </Parent>
    </div>
  )
}

export default App
