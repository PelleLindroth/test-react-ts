import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import userEvent from '@testing-library/user-event'
import Validator from './index'

describe('Validator', () => {
  it('renders component correctly', () => {
    const wrapper = shallow(<Validator />)

    expect(wrapper).toMatchSnapshot()
  })
  it('renders with empty text input field', () => {
    render(<Validator />)

    const textInput = screen.getByRole('textbox')

    expect(textInput).toHaveTextContent('')
  })
  it('sets input text class to invalid by default', () => {
    render(<Validator />)

    const textInput = screen.getByRole('textbox')

    expect(textInput).toHaveClass('invalid')
  })
  it('shows message while text input field is empty and hides it when typing', () => {
    render(<Validator />)

    const message = screen.getByText(/type/i)
    const textInput = screen.getByRole('textbox')

    expect(message).toBeInTheDocument()

    userEvent.type(textInput, 'iuey')

    expect(message).not.toBeInTheDocument()
  })
  it('changes input text class to valid when entering valid name', () => {
    render(<Validator />)

    const textInput = screen.getByRole('textbox')

    userEvent.type(textInput, 'Pelle Lindroth{enter}')

    expect(textInput).toHaveClass('valid')
    expect(textInput).not.toHaveClass('invalid')
  })
  it('changes input text class to invalid when entering invalid name', () => {
    render(<Validator />)

    const textInput = screen.getByRole('textbox')

    userEvent.type(textInput, 'Pelle Lindroth{enter}')

    expect(textInput).toHaveClass('valid')

    userEvent.type(textInput, 'P€££€{enter}')

    expect(textInput).toHaveClass('invalid')
  })
})
