import React from "react"
import { connect } from "react-redux"

const Btn = (props) => {
  const clickHanlder = (flag) => {
    props.dispatch({ type: "SET_VISIBLE", flag: flag })
  }

  return (
    <div>
      <button
        onClick={() => {
          clickHanlder("ALL")
        }}
      >
        ALL
      </button>
      <button
        onClick={() => {
          clickHanlder("DONE")
        }}
      >
        DONE
      </button>
      <button
        onClick={() => {
          clickHanlder("noDone")
        }}
      >
        noDone
      </button>
    </div>
  )
}

export default connect()(Btn)
