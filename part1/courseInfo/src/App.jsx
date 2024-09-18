const App = () => {
    const course = 'Half Stack application development'
    
    // Using objects for parts
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  
    return (
      <div>
        <h1>{course}</h1>
        
        {/* Accessing the properties of each part object */}
        <p>{part1.name} {part1.exercises}</p>
        <p>{part2.name} {part2.exercises}</p>
        <p>{part3.name} {part3.exercises}</p>
  
        {/* Summing the exercises */}
        <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
      </div>
    )
  }
  
  export default App
  