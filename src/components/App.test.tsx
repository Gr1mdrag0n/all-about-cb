import { afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Router from './Router'

afterEach(() => {
  cleanup()
  window.location.hash = ''
})

it('renders the home page', () => {
  render(<Router />)
  expect(screen.getByText('Hello, my name is Caradec.')).toBeInTheDocument()
  expect(screen.getByText('EXPERIENCE')).toBeInTheDocument()
})

it('renders the bar menu at /#/bar', () => {
  window.location.hash = '#/bar'
  render(<Router />)
  expect(screen.getByText('Bar Menu')).toBeInTheDocument()
})
