import { render, screen } from '@testing-library/react'
import { shallow } from "enzyme"
import Greeting from './Greeting'

describe('Greeting', () => {
 it('renders h1', () => {
  render(<Greeting />)

  const hello = screen.getByText(/hello/i)

  expect(hello).toBeInTheDocument()
 })
 it('shallow renders', () => {
   const wrapper = shallow(<Greeting />)

   expect(wrapper).toMatchSnapshot()
 })
})