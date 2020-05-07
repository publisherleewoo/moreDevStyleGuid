import React from "react"
import LinkButton from "./../atom/LinkButton"

const ProductList = ({ items }) => {
  return <ul>{itemList(items)}</ul>
}

const itemList = (items) => {
  return items.map((item, index) => {
    return (
      <li key={index}>
        <p>{item.name}</p>
        <LinkButton url={item.url} label="상품 상세"></LinkButton>
      </li>
    )
  })
}

export default ProductList
