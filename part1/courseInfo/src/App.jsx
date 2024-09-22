
const App = () => {
    // Single object containing the course name and parts
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
        {/* Accessing the course name */}
        <h1>{course.name}</h1>
  
        {/* Mapping over the parts array to display each part */}
        {course.parts.map((part, index) => (
          <p key={index}>
            {part.name} {part.exercises}
          </p>
        ))}
  
        {/* Calculating the total number of exercises */}
        <p>
          Number of exercises {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
        </p>
      </div>
    )
  }

  export default App
  