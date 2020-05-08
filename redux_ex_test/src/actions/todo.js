export const addTodo = (text) => {
  return { type: "ADD_TODO", payload: { text: text, checked: false } }
}

export const toggleTodo = (index) => {
  return { type: "TOGGLE_TODO", index }
}
