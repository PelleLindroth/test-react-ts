import { useState } from 'react'
import NavBar from '../NavBar'

const Header = () => {
  const [view, setView] = useState<number>(0)
  const menuItems = ['Home', 'About', 'Contact', 'Profile']

  return (
    <header>
      {`Current view: ${view}`}
      <NavBar items={menuItems} onSetView={setView}/>
    </header>
  )
}

export default Header