import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { AppContext } from '../../../App'
import Navbar from '../Navbar'

describe('navbar', () => {
    test('should render 5 dashboard elements', async () => {
        const AppWrapper = ({ children }) => (
            <AppContext
                title="Dashboard"
                close={true}
                setClose={() => {}}
                setTitle={() => {}}
            >
                {children}
            </AppContext>
        )
        render(<Navbar />, { AppWrapper })
        const navBtns = screen.getAllByTestId('nav-button')
        expect(navBtns.length).toBe(5)
    })
    // integration test
    test('should render name of clicked nav button on header bar', async () => {
        const AppWrapper = ({ children }) => (
            <AppContext
                title="Dashboard"
                close={true}
                setClose={jest.fn()}
                setTitle={jest.fn()}
            >
                {children}
            </AppContext>
        )
        render(<Navbar />, { AppWrapper })

        const navBtn = screen.getAllByTestId('nav-button')[0]
        userEvent.click(navBtn)
        expect(navBtn).toBeInTheDocument()
    })
})
