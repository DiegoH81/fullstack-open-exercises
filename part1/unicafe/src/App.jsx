import { useState } from 'react'

const Tittles = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Data = (props) =>
{
  return (
    <tr>
      <td> {props.text} </td>
      <td> {props.count} </td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  let total = props.good + props.bad + props.neutral;
  if (total <= 0)
    return (<p>No data given!</p>)
  else
  {
    const get_average = () => {
      if (total <= 0)
        return 0;
      else
        return (props.good - props.bad) / total;
    }

    const get_positive_perc = () => {
      if (total <= 0)
        return 0;
        return props.good / total * 100; 
    }

    return (
      <table>
        <Data text = "good" count = {props.good} />
        <Data text = "neutral" count = {props.neutral} />
        <Data text = "bad" count = {props.bad} />
        <Data text = "all" count = {total} />
        <Data text = "average" count = {get_average()} />
        <Data text = "positive" count = {get_positive_perc()} />
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {setGood(good + 1);}
  const addNeutral = () => {setNeutral(neutral + 1);}
  const addBad = () => {setBad(bad + 1);}

  
  return (
    <div>
      <Tittles text = "give feedback" />
      <Button onClick = {addGood} text = "good" />
      <Button onClick = {addNeutral} text = "neutral" />
      <Button onClick = {addBad} text = "bad" />
      
      <Tittles text = "statistics" />
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}

export default App