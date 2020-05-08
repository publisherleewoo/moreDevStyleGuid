import React from "react"
import { connect } from "react-redux"
import {
  increaseAction,
  decreaseAction,
  increaseThenDecrease,
} from "./../modules/counter"

const Button = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.increase()
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.decrease()
        }}
      >
        -
      </button>
    </div>
  )
}

export default connect(undefined, (dispatch) => {
  return {
    increase: () => dispatch(increaseThenDecrease()),
    decrease: () => dispatch(decreaseAction()),
  }
})(Button)
