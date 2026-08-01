const Header = (props) => {
  return (<h1>{props.course_name}</h1>)
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.num_exercises}
    </p>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part = {props.e1} num_exercises = {props.en1}/>
      <Part part = {props.e2} num_exercises = {props.en2}/>
      <Part part = {props.e3} num_exercises = {props.en3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course_name = {course} />

      <Content e1 = {part1} en1 = {exercises1}
               e2 = {part2} en2 = {exercises2}
               e3 = {part3} en3 = {exercises3}/>
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App