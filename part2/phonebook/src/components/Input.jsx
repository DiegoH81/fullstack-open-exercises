import { useState } from 'react'

const Input = (props) => {
  return (
    <div>
      {props.text}: <input onChange={props.handler}/>
    </div>
  )
}

export default Input