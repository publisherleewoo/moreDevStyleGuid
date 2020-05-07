import React, { useState } from "react"
import TabPanel from "./TabPanel"
import ProductList from "./../Molecules/ProductList"
import UserList from "./../Molecules/UserList"
import RegionList from "./../Molecules/RegionList"

const SaleRanking = ({ items, users, regions }) => {
  const [index, setIndex] = useState(0)
  const handleChangeIndex = (index) => {
    console.log(index)
    setIndex(index)
  }

  return (
    <div>
      <TabPanel changeIndex={handleChangeIndex} current={index}>
        <ProductList items={items} />
        <UserList users={users} />
        <RegionList regions={regions} />
      </TabPanel>
    </div>
  )
}

export default SaleRanking
