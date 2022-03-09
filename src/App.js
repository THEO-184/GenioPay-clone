import { createContext, useState, useEffect } from 'react'
import useWindowDimensions from './components/useWindowDimension'
import HeaderNav from './components/HeaderNav/HeaderNav'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './pages/Dashboard/Dashboard'
import Wallet from './pages/Wallet/Wallet'
console.clear()

export const AppContext = createContext(null)
function App() {
    const [title, setTitle] = useState('Dashboard')
    const [close, setClose] = useState(true)
    const { width } = useWindowDimensions()

    useEffect(() => {
        if (width > 922) {
            setClose(true)
        }
    }, [width])

    return (
        <AppContext.Provider
            className="App"
            value={{ setTitle, title, setClose, close }}
        >
            {close && <Navbar />}

            <HeaderNav />
            {title === 'Dashboard' ? (
                <Dashboard />
            ) : title === 'Wallet' ? (
                <Wallet />
            ) : (
                <h1>{title}</h1>
            )}
        </AppContext.Provider>
    )
}

export default App
