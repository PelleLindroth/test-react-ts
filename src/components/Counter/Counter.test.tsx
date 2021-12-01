import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from './Counter'

describe('Counter', () => {
  it('increments value when button is pressed', () => {
    render(<Counter />)

  const incrementButton = screen.getByRole('button', {name: /increment/i})
  const value = screen.getByText(/value/i)

  expect(value).toHaveTextContent('1')

  userEvent.click(incrementButton)

  expect(value).toHaveTextContent('2')

  userEvent.click(incrementButton)

  expect(value).toHaveTextContent('3')
  })
  it('changes value correctly', () => {
    render(<Counter />)

    const incrementButton = screen.getByRole('button', {name: /increment/i})
    const decrementButton = screen.getByRole('button', {name: /decrement/i})
    const value = screen.getByText(/value/i)

    expect(value).toHaveTextContent('1')

    userEvent.click(decrementButton)

    expect(value).toHaveTextContent('0')

    userEvent.click(decrementButton) 
    userEvent.click(decrementButton) 

    expect(value).toHaveTextContent('-2')

    userEvent.click(decrementButton) 
    userEvent.click(decrementButton) 
    userEvent.click(incrementButton) 
    userEvent.click(incrementButton) 

    expect(value).toHaveTextContent('-2')
  })
})