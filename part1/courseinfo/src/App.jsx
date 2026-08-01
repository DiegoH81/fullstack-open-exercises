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
      <Part part = {props.parts[0].name} num_exercises = {props.parts[0].exercises}/>
      <Part part = {props.parts[1].name} num_exercises = {props.parts[1].exercises}/>
      <Part part = {props.parts[2].name} num_exercises = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course_name = {course.name} />

      <Content parts = {course.parts}/>
      <Total total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App