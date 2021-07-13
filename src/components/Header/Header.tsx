import React from 'react'
import styled from 'styled-components'
import { PaddingContainer } from '../../styles/themes'
import { Link } from 'react-router-dom'

const HeaderHolder = styled.div`
    width: 100%;
    background-color: ${props => props.theme.headerColor};
`
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const HeaderText = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme.fontColor};
`
const RightSide = styled.div`
`
const ProfileLink = styled(Link)`
    text-decoration: none;
`
const ProfileLogo = styled.img`
    display: block;
    margin: 0;
    padding: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 1em;
`

const Header = () => {
    return (
        <HeaderHolder>
            <PaddingContainer>
                <HeaderContainer>
                    <HeaderText>Random Store</HeaderText>
                    <RightSide>
                        <ProfileLink to="/profile">
                            <ProfileLogo src="" alt=""/>
                        </ProfileLink>
                    </RightSide>
                </HeaderContainer>
            </PaddingContainer>
        </HeaderHolder>
    )
}

export default Header
