import React from "react"

const RegionList = ({ regions }) => {
  const regionDetails = regions.map(({ name, code }) => {
    return <li key={code}>{name}</li>
  })
  return <ul>{regionDetails}</ul>
}

export default RegionList
