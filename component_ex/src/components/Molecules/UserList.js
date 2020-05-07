import React from "react"

const UserList = ({ users }) => {
  const userDetails = users.map((user, index) => (
    <li key={index}>{user.name}</li>
  ))
  return <ul>{userDetails}</ul>
}

export default UserList
