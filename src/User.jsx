import React from 'react'

function User({ name, price, email,  storage}) {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <h1>{email}</h1>
        <h1>{storage}</h1>
    </div>
  )
}

export default User