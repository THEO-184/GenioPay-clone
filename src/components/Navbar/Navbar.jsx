import React, { useState, useContext, useEffect } from 'react'
import { AiOutlineEye, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { AppContext } from '../../App'
import useWindowDimensions from '../useWindowDimension'
import {
    NavContainer,
    Img,
    Details,
    NavMenu,
    NavLink,
    Vector,
    WalletContainer,
    ButtonContainer,
    Button,
    Refer,
    LightGreenBtn,
    CloseIcon,
} from './NavComponents/components'
import getNavContent from '../../headerData'

const Navbar = () => {
    const { width } = useWindowDimensions()
    const { setTitle, setClose } = useContext(AppContext)
    const navData = getNavContent()
    const [navId, setNavId] = useState(0)
    const [pageName, setPageName] = useState('')
    const [widthVal, setWidthVal] = useState(width)

    const handleChangeNavLink = (id, word) => {
        setNavId(id)
        setPageName(word)
        localStorage.setItem('navLink', JSON.stringify(id))
        setTitle(word)
        setPageName(word)
        localStorage.setItem('openedPage', JSON.stringify(word))
        if (widthVal < 922) {
            setClose(false)
        }
    }

    useEffect(() => {
        const navLink = localStorage.getItem('navLink')
        const savedNavLink = navLink ? JSON.parse(navLink) : 0
        setNavId(parseInt(savedNavLink))

        const page = localStorage.getItem('openedPage')
        const openPage = page ? JSON.parse(page) : 'Dashboard'
        setTitle(openPage)
    }, [navId, pageName])

    return (
        <NavContainer>
            <Img src="/images/logo.png" alt="logo" />
            <Details>
                <WalletContainer>
                    <div>
                        <Vector>
                            <img src="/images/Vector.png" alt="vector" />
                        </Vector>
                        <div>
                            <p>Wallet balance</p>
                            <h6>$1500.00</h6>
                        </div>
                    </div>
                    <div>
                        <AiOutlineEye color="#fff" />
                    </div>
                </WalletContainer>
                <hr />
                <WalletContainer>
                    <div>
                        <Vector>
                            <img src="/images/star.png" alt="star" />
                        </Vector>
                        <div>
                            <p>Awarded Points</p>
                            <h6>35</h6>
                        </div>
                    </div>
                    <div>
                        <AiOutlineEye color="#fff" />
                    </div>
                </WalletContainer>
                <hr />
                <ButtonContainer>
                    <Button white pink>
                        Pay-In
                    </Button>
                    <Button green>Pay-Out</Button>
                </ButtonContainer>
            </Details>
            <NavMenu>
                {navData.map((nav) => {
                    return (
                        <NavLink
                            key={nav.id}
                            onClick={() =>
                                handleChangeNavLink(nav.id, nav.word)
                            }
                            backCol={nav.id === navId ?? '#fff'}
                            textCol={nav.id === navId ?? '#017189'}
                            data-testid={'nav-button'}
                        >
                            {nav.path}
                            <h3>{nav.word}</h3>
                        </NavLink>
                    )
                })}
            </NavMenu>
            <Refer>
                <div>
                    <img src="/images/Bell.png" alt="bell" />
                    <div>
                        <h6>Refer and earn</h6>
                        <p>Use the below link to invite customers</p>
                    </div>
                </div>
                <LightGreenBtn>Invite Friends</LightGreenBtn>
            </Refer>
        </NavContainer>
    )
}

export default Navbar
