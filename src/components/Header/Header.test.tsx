import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { mount } from "enzyme"
import Header from "./index"

describe('Header', () => {
  it('mounts Header correctly with NavBar', () => {
    const wrapper = mount(<Header />)

    expect(wrapper).toMatchSnapshot()

    wrapper.unmount()
  })
  it('receives current view from NavBar', () => {
    render(<Header />)

    const currentView = screen.getByText(/current view/i)
    const menuItems = screen.getAllByRole('listitem')

    expect(currentView).toHaveTextContent('0')
    
    userEvent.click(menuItems[2])

    expect(currentView).toHaveTextContent('2')
  })
})