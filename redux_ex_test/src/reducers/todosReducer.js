const initialState = {
  list: [],
}
// list:[{ text: text, checked: false }]
function todos(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newList = state.list.concat(action.payload)
      return Object.assign({}, state, { list: newList })

    case "TOGGLE_TODO":
      const changeList = state.list.map((todo, index) =>
        index === action.index ? { ...todo, checked: !todo.checked } : todo
      )

      return Object.assign({}, state, { list: changeList })

    default:
      return state
  }
}

export default todos
