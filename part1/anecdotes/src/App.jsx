import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick={props.onClick}>
    {props.data}
  </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const get_random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const next_click = () => {
    let next_idx = get_random(0, anecdotes.length - 1);
    setSelected(next_idx);
  }

  const add_vote = () => {
    let new_arr = [...votes];
    new_arr[selected] += 1;
    setVotes(new_arr);
  }

  const get_most_voted = () => {
    let most_voted_idx = 0;
    for (let i = 0; i < votes.length; i++)
    {
      if (votes[i] >= votes[most_voted_idx])
        most_voted_idx = i;
    }

    if (votes[most_voted_idx] === 0)
      return "";
    else
      return anecdotes[most_voted_idx];
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <h3>Has {votes[selected]} votes</h3>
      <br/>
      <Button data = "Next anecdote" onClick = {next_click} />
      <Button data = "add vote" onClick = {add_vote} />

      <h1>Anecdote with most votes</h1>
      {get_most_voted()}
    </div>
  )
}

export default App