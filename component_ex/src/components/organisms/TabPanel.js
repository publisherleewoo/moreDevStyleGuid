import React from "react"

const TabPanel = ({ children, current, changeIndex }) => {
  const tabs = children.map((comp, index) => {
    return (
      <div
        key={index}
        style={{ display: current === index ? "block" : "none" }}
      >
        {comp}
      </div>
    )
  })

  const tabLabel = (
    <div>
      <button onClick={() => changeIndex(0)}>상품리스트</button>
      <button onClick={() => changeIndex(1)}>회원</button>
      <button onClick={() => changeIndex(2)}>지역</button>
    </div>
  )

  return (
    <div>
      {tabLabel}
      {tabs}
    </div>
  )
}

export default TabPanel
