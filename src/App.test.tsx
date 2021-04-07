import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { App } from './App'

describe('Render UI', () => {
    it('render root container', async () => {
        await act(async () => render(<App />))
        const app = screen.getByTestId('app')
        expect(app).toBeInTheDocument()
    })
    it('render title', async () => {
        await act(async () => render(<App />))
        const title = screen.getByText('Title for single item')
        expect(title).toBeInTheDocument()
    })
})

