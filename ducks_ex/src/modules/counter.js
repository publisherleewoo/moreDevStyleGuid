const INC = "ACTION_INCREASE"
const DEC = "ACTION_DECREASE"

export const increaseAction = (seq) => ({ type: INC, seq })
export const decreaseAction = (seq) => ({ type: DEC, seq })
let sequence = 0
export const increaseThenDecrease = () => {
  return (dispatch) => {
    console.log("1")
    dispatch(increaseAction(sequence++))

    setTimeout((seq) => {
      console.log("3")

      dispatch(decreaseAction(sequence))
    }, 5000)
  }
}
const initialState = { count: 0 }

const counter = (state = initialState, action) => {
  let newState = null
  switch (action.type) {
    case INC:
      newState = { count: state.count + 1 }
      break
    case DEC:
      newState = { count: state.count - 1 }
      break
    default:
      newState = state
      break
  }
  return newState
}

export default counter
