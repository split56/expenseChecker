import React from 'react'

function DisplayTime({ value, type, isDanger }) {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  )
}

export default DisplayTime