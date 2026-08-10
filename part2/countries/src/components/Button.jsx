import { useState } from 'react'

const ButtonJSX = (props) => {
  return (
    <button onClick={props.handler}>
        {props.text}
    </button>
  )
}

export default ButtonJSX