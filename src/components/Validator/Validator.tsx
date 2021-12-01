import { useState } from 'react'

const Validator = () => {
  const [name, setName] = useState<string>('')
  const [currentClass, setCurrentClass] = useState<string>('invalid')

  const validate = () => {
    if (name.match(/^[a-zA-Z\s]*$/)) {
      setCurrentClass('valid')
    } else {
      setCurrentClass('invalid')
    }

    setName('')
  }

  return (
    <form onSubmit={validate}>
      {name.length < 1 && <p>Please type your name</p>}
      <input
        className={currentClass}
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  )
}

export default Validator
