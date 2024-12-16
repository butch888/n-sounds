import React from "react"

export function App () {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <h1>Count</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
    </div>
  )
}