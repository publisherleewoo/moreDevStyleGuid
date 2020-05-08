function visible(state = "ALL", action) {
  if (action.type === "SET_VISIBLE") {
    return action.flag
  }
  return state
}
export default visible
