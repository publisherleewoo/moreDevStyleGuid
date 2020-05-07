import React from "react"
import PrimaryButton from "../atom/PrimaryButton"

const CardPreset = ({ name, linkLabel, handleClick }) => {
  return (
    <div>
      <p>{name}</p>
      <PrimaryButton
        handleClick={handleClick}
        label={linkLabel}
      ></PrimaryButton>
    </div>
  )
}

export default CardPreset
