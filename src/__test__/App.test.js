import { screen, render } from '@testing-library/react'
import App from '../App'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

const clickOnBtn = (btns) => {
    const headerElements = screen.getByTitle('header')
    btns.forEach((btnLink, index) => {
        const navBtn = screen.getAllByTestId('nav-button')[index]
        userEvent.click(navBtn)
        expect(headerElements).toHaveTextContent(btnLink)
    })
}

describe('App', () => {
    test('should change header to name of clicked nav link', async () => {
        render(<App />)
        clickOnBtn(['Dashboard', 'Wallet', 'Cards', 'FX Center'])
        const searchElement = screen.getByPlaceholderText(/Search…/i)
        expect(searchElement).toBeInTheDocument()
        userEvent.type(searchElement, 'search')
        expect(searchElement).toHaveDisplayValue('search')
    })
})
