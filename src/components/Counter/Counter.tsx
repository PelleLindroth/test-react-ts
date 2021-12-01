import { useState } from "react"

const Counter = () => {
  const [value, setValue] = useState(1)

  return (
    <>
    <div>Value: {value}</div>
    <button onClick={() => setValue(value+1)}>Increment</button>
    <button onClick={() => setValue(value-1)}>Decrement</button>
    </>
  )
}

export default Counter