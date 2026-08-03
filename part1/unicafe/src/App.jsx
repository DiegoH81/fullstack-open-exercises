import { useState } from 'react'

const Display = ({counter}) =>{
  return (
    <div>{counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick= { props.onClick }> 
      {props.text}
    </button>
  )
}

const App = () => {

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [all, setAll] = useState([]);

  const handleLeft = () => {
    setLeft(left + 1);
    setAll(all.concat('L'));
  }

  const handleRight = () => {
    setRight(right + 1);
    setAll(all.concat('R'));
  }

  return (
    <div>
      <Display counter = {left} />
      <Display counter = {right} />
      <Display counter = {all} />

      <Button onClick = {handleLeft} text = "PLUS L" />
      <Button onClick = {handleRight} text = "PLUS R" />
    </div>
  )
}

export default App