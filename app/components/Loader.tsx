import React from 'react'

export const Loader = () => {
  return (
    <div className='loader'></div>
  )
}

export const Spinner = () => {
  return (
    <div className="loader_container">
      <div className="loader_box">
      <div className='spinner'></div>
      </div>
    </div>
  )
}
export const RoundSpinner = () => {
  return (
    <div className="loader_container">
      <div className="loader_box">
        <div className='roundspinner'></div>
      </div>
    </div>
  )
}