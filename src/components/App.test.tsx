import { afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Router from './Router'

afterEach(() => {
  cleanup()
  window.location.hash = ''
})

it('renders the coffee-chat home page', () => {
  render(<Router />)
  expect(screen.getByText('Developer.')).toBeInTheDocument()
  expect(screen.getByText('Small Talk')).toBeInTheDocument()
  expect(screen.getByText('The Paperwork')).toBeInTheDocument()
  expect(screen.getByText('Enough small talk.')).toBeInTheDocument()
})

it('renders the bar menu at /#/bar', () => {
  window.location.hash = '#/bar'
  render(<Router />)
  expect(screen.getByText('Bar Menu')).toBeInTheDocument()
})
