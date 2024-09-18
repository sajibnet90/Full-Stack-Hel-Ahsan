const App = () => {
    const course = 'Half Stack application development'
  
    // Array of objects representing parts of the course
    const parts = [
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
  
    return (
      <div>
        <h1>{course}</h1>
  
        {/* Mapping over the parts array to display each part */}
        {parts.map((part, index) => (
          <p key={index}>
            {part.name} {part.exercises}
          </p>
        ))}
  
        {/* Calculating the total number of exercises */}
        <p>
          Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
        </p>
      </div>
    )
  }
  
  export default App
  