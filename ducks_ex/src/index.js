import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import counter from "./modules/counter"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
