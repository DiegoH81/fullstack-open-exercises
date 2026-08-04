const Header = (props) => {
    return (
        <h1>{props.data}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.name} {props.count}</p>
    )
}

const Content = (props) => {
    const parts = props.parts;
    return (
        <div>
            {parts.map(part => <Part key = {part.id} name = {part.name} count = {part.exercises} />)}
        </div>
    )
}

const Course = (props) => {
    const data_course = props.course;
    console.log("data_course", data_course);
    console.log("name", data_course.name);
    console.log("parts", data_course.parts);
    
    const total = data_course.parts.reduce((s, act) => s + act.exercises, 0)
    return(
        <div>
            <Header data = {data_course.name}/>
            <Content parts = {data_course.parts}/>
            <h3>total of {total} exercises</h3>
        </div>
    )
}

const CoursesComponent = (props) => {
    return (
        <div>   
        {
            props.course.map(c => <Course id = {c.id} course = {c} />)
        }
        </div>
    )
}

export default CoursesComponent