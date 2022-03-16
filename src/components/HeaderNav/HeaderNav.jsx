import React, { useContext } from 'react'
import { HeaderNavContainer, UserProfile } from './components/components'
import styled from 'styled-components'
import { BiChevronDown, BiMenu } from 'react-icons/bi'
import device from '../../mediaQuery/mediaQuery'
import { AiOutlineMenu } from 'react-icons/ai'
import { AppContext } from '../../App'
import SearchBar from './Searchbar'

const HeaderNav = () => {
    const { title, setClose, close } = useContext(AppContext)
    const handleClose = () => {
        setClose(!close)
    }

    return (
        <HeaderNavContainer>
            <h3 title="header">{title}</h3>
            <div className="flex-container">
                <SearchContainer>
                    <SearchBar size={25} />
                </SearchContainer>
                <img src="/images/tree.png" alt="tree" className="tree" />
                <span>0 planted</span>
                <img
                    src="/images/notification.png"
                    alt="notification"
                    className="bell"
                />
                <UserProfile>
                    <img src="/images/User.png" alt="User" />
                    <div className="verified">
                        <p>Verfied</p>
                        <h6>Huss smith</h6>
                    </div>
                    <BiChevronDown />
                </UserProfile>
            </div>

            <CloseBtn>
                <AiOutlineMenu
                    onClick={() => handleClose()}
                    color="#000"
                    size={'2rem'}
                    style={{ cursor: 'pointer', zIndex: '20' }}
                />
            </CloseBtn>
        </HeaderNavContainer>
    )
}

const CloseBtn = styled.div`
    width: 30px;
    height: 30px;
    position: fixed;
    top: 25px;
    right: 20px;
    z-index: 10000;
    display: none;

    @media ${device.tablet} {
        display: block;
    }
`

const SearchContainer = styled.div`
    @media ${device.mobileL} {
        display: none;
    }
`

export default HeaderNav
