import { useState } from "react"

interface NavBarProps {
  items: string[],
  onSetView: React.Dispatch<React.SetStateAction<number>>
}

const NavBar = (props: NavBarProps) => {
  const [activeItem, setActiveItem] = useState<number>(0)

  const handleClick = (index: number) => {
    props.onSetView(index)
    setActiveItem(index)
  }

  return (
    <nav>
      <ul className="menu">
       {
         props.items.map((item, index) => 
         <li 
          key={item}
          onClick={() => handleClick(index)} 
          className={`menu-item ${activeItem === index ? "selected" : ""}`}
         >
           {item}
         </li>
         )
       }
      </ul>
    </nav>
  )
}

export default NavBar