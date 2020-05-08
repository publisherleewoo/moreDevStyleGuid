import React from "react"
import { connect } from "react-redux"

const ControllerButtons = (props) => {
  const clickHandler = (flag) => {
    props.dispatch({ type: "SET_VISIBLE", flag: flag })
  }

  return (
    <div>
      <button onClick={() => clickHandler("ALL")}>ALL</button>
      <button onClick={() => clickHandler("ACTIVE")}>ACTIVE</button>
      <button onClick={() => clickHandler("INACTIVE")}>INACTIVE</button>
    </div>
  )
}

export default connect()(ControllerButtons)
