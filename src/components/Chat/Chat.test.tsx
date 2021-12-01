import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { shallow } from "enzyme"
import Chat from './Chat'

describe('Chat', () => {
  it('renders Chat component correctly with chat icon', () => {
    const wrapper = shallow(<Chat />)

    expect(wrapper).toMatchSnapshot()
  })
  it('renders full Chat component correctly when clicking on chat icon', () => {
    const wrapper = shallow(<Chat />)

    wrapper.find('img').simulate('click')

    expect(wrapper).toMatchSnapshot()
  })
  it('shows only icon by default', () => {
    render(<Chat />)

    const icon = screen.getByAltText(/chat-icon/)
    const invisibletextInput = screen.queryByRole('textbox', { name: /message/i })

    expect(icon).toBeInTheDocument()
    expect(invisibletextInput).not.toBeInTheDocument()
  })
  it('expands component when clicking on chat icon', () => {
    render(<Chat />)

    const icon = screen.getByAltText(/chat-icon/)
    const invisibleChatInput = screen.queryByRole('textbox', { name: /message/i })
    expect(invisibleChatInput).not.toBeInTheDocument()
    
    userEvent.click(icon)
    
    const visibleChatInput = screen.getByRole('textbox', { name: /message/i })
    expect(visibleChatInput).toBeInTheDocument()
  })
  it('hides expanded chat when clicking on chat icon again', () => {
    render(<Chat />)

    const icon = screen.getByAltText(/chat-icon/)
    
    userEvent.click(icon)

    const visibleChatInput = screen.getByRole('textbox', { name: /message/i})
    expect(visibleChatInput).toBeInTheDocument()
    
    userEvent.click(icon)

    expect(visibleChatInput).not.toBeInTheDocument()
  })
  it('clears text input on Enter and adds message to message history', () => {
    render(<Chat />)

    const icon = screen.getByAltText(/chat-icon/)
    userEvent.click(icon)
    
    const messages = screen.getAllByRole('listitem')

    expect(messages).toHaveLength(3)

    const textInput = screen.getByRole('textbox', { name: /message/i})
    
    userEvent.type(textInput, 'thats great{enter}')
    
    const updatedMessages = screen.getAllByRole('listitem')

    expect(textInput).toHaveTextContent('')
    expect(updatedMessages).toHaveLength(4)
    expect(updatedMessages[3]).toHaveTextContent('thats great')
  })
})