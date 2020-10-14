import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders React Weather header', () => {
  const { getByText } = render(<App />)
  const headingElement = getByText(/React Weather/i)
  expect(headingElement).toBeInTheDocument()
})
