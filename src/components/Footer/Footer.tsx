import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'
import { PaddingContainer } from '../../styles/themes'

const FooterHolder = styled.div`
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2));
`
const FooterContainer = styled.div`
    width: 100%;
    display: grid;
    text-align: center;
    grid-template: auto auto / auto auto;
    column-gap: 1em;
    row-gap: 1em;
`
const FooterNav = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: center;
    justify-self: center;
    @media screen and (max-width: 380px){
      display: flex;
      flex-direction: column;
      span{
        margin-top: 0.3em;
      }
    }
    span{
      margin-left: 1em;
      text-decoration: none;
      color: #666666;
      cursor: pointer;
    }
`
const FooterLinks = styled.div`
    grid-row: 1/2;
    grid-column: 2/3;
    align-self: center;
    justify-self: center;
    a,span{
      text-decoration: none;
      color: #666666;
      cursor: pointer;
    }
    svg{
      margin: 0.5em;
      cursor: pointer;
    }
`
const SocialIcons = styled(FontAwesomeIcon)`
    &:hover,&:focus{
        color: rgb(15, 240, 210);
    }
`
const FooterCopyright = styled.div`
    grid-row: 2/3;
    grid-column: 1/-1;
    align-self: center;
    justify-self: center;
`

const Footer = () => {
    return (
        <FooterHolder>
            <PaddingContainer>
                <FooterContainer>
                    <FooterNav>
                        <span>Home</span>
                        <span>About</span>
                        <span>Contact</span>
                    </FooterNav>
                    <FooterLinks>
                        <a href="https://www.linkedin.com/in/kushagra-madhukar-8b28131b4/" target="__blank"><SocialIcons icon={faLinkedinIn} size="1x" className="footer-font-icon"/></a>
                        <span onClick={() => window.open('mailto:madhukarkushagra@gmail.com')}><SocialIcons icon={faPaperPlane} size="1x"/></span>
                        <a href="https://github.com/Kushagra-Madhukar" target="__blank"><SocialIcons icon={faGithub} size="1x"/></a>
                    </FooterLinks>
                    <FooterCopyright>
                        &copy; 2021 Copyright Kushagra Madhukar
                    </FooterCopyright>
                </FooterContainer>
            </PaddingContainer>
        </FooterHolder>
    )
}

export default Footer
