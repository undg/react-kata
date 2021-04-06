import { render, screen } from '@testing-library/react'
import { App } from './App'

it('renders learn react link', () => {
    render(<App />)
    const app = screen.getByTestId('app')
    expect(app).toBeInTheDocument()
})
