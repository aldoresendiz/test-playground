import { render, screen } from "@testing-library/react"
import App from './App'
import renderer from 'react-test-renderer'

test('renders text MickeyMouse', () => {
  render(<App />)
  const nameElement = screen.getByText(/mickey mouse/i)
  expect(nameElement).toBeInTheDocument()
});

/*
test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})
*/

// test("header renders with correct text", () => {
//   render(<App />)
//   const headerEl = screen.getByRole("heading")
//    expect(headerEl.textContent).toBe("Testing Playground") 
// })
