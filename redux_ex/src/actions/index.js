export const addTodo = (text) => {
  return { type: "ADD_TODO", text: text }
}

export const toggleTodo = (index) => {
  return { type: "TOGGLE_TODO", index: index }
}

//액션을 전달하려면 dispatch를 사용

//reducers는 actions과 store를 연결
