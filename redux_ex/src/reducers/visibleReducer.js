const visibleReducer = (state = "ALL", action) => {
  if (action.type === "SET_VISIBLE") {
    console.log("SET_VISIBLE")
    return action.flag
  }

  return state
}

export default visibleReducer
