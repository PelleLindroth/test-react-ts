import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import NavBar from "./index"

describe('NavBar', () => {
  it('renders NavBar component with given menu items', () => {
    render(<NavBar items={['Home', 'About', 'Contact', 'Profile']} onSetView={jest.fn()} />)

    const menuItems = screen.getAllByRole('listitem')

    expect(menuItems).toHaveLength(4)
  })
  it('sets selected class on first menu item by default', () => {
    render(<NavBar items={['Home', 'About', 'Contact', 'Profile']} onSetView={jest.fn()}/>)
    
    const menuItems = screen.getAllByRole('listitem')
    
    expect(menuItems[0]).toHaveClass('selected')
  })
  it('sets selected class on clicked item', () => {
    render(<NavBar items={['Home', 'About', 'Contact', 'Profile']} onSetView={jest.fn()}/>)
    
    const menuItems = screen.getAllByRole('listitem')
    
    userEvent.click(menuItems[1])
    
    expect(menuItems[1]).toHaveClass('selected')
  })
  it('removes selected class from other menu items', () => {
    render(<NavBar items={['Home', 'About', 'Contact', 'Profile']} onSetView={jest.fn()}/>)
    
    const menuItems = screen.getAllByRole('listitem')
    
    userEvent.click(menuItems[0])
    userEvent.click(menuItems[2])
    userEvent.click(menuItems[1])
    
    expect(menuItems[1]).toHaveClass('selected')
    expect(menuItems[0]).not.toHaveClass('selected')
    expect(menuItems[2]).not.toHaveClass('selected')
  })
  it('calls onSetView one time for each click', () => {
    const onSetViewSpy = jest.fn()
    render(<NavBar items={['Home', 'About', 'Contact', 'Profile']} onSetView={onSetViewSpy}/>)
    
    const menuItems = screen.getAllByRole('listitem')
    
    userEvent.click(menuItems[0])
    userEvent.click(menuItems[2])
    userEvent.click(menuItems[1])
    
    expect(onSetViewSpy).toHaveBeenCalledTimes(3)
    expect(onSetViewSpy).toHaveBeenLastCalledWith(1)
  })
})