import React from "react"

import "./App.css"
import SaleRanking from "./components/organisms/SaleRanking"
import styled from "styled-components"

const productData = [
  { name: "product 1 ", url: "테스트1페이지" },
  { name: "product 2 ", url: "테스트2페이지" },
  { name: "product 3 ", url: "테스트3페이지" },
  { name: "product 4 ", url: "테스트4페이지" },
]

const users = [{ name: "user01" }, { name: "user02" }, { name: "user03" }]
const regions = [
  { name: "korea", code: "ko" },
  { name: "japan", code: "jr" },
]
const Input = styled.input.attrs({
  type: "password",
})`
  color: white;
  background: blue;
`

function App() {
  return (
    <div className="App">
      <Input size={2}></Input>

      <SaleRanking items={productData} users={users} regions={regions} />
    </div>
  )
}

export default App
