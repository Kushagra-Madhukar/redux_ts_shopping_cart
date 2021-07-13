import styled, { CommonTheme, createGlobalStyle, DefaultTheme } from 'styled-components'
import {PRODUCT_CARD_WIDTH} from '../config'
import { InputField } from './mixins'

const commonTheme: CommonTheme = {
    productCardWidth: PRODUCT_CARD_WIDTH,
    inputField: InputField
}

export const lightTheme: DefaultTheme = {
    bodyColor: '#fff',
    fontColor: '#000',
    primary: '#000',
    secondary: '#012789',
    stroke: '#DEE4EB',
    placeholder: '#B4B4B4',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    cardBgColor: '#fff',
    filterTabColor: '#4C4C4C',
    headerColor: 'blue',
    ...commonTheme
}

export const darkTheme: DefaultTheme = {
    bodyColor: '#000',
    fontColor: '#fff',
    primary: '#fff',
    secondary: '#012789',
    stroke: '#DEE4EB',
    placeholder: '#B4B4B4',
    shadowColor: 'rgba(255,255,255,0.2)',
    cardBgColor: '#000',
    filterTabColor: '#4C4C4C',
    headerColor: 'blue',
    ...commonTheme
}

export const PaddingContainer = styled.div`
    width: 100%;
    /* display: flex;
    justify-content: center; */
    margin: 0 auto;
    @media screen and (min-width: 1023px){
        max-width: 974px;
    }
    @media screen and (min-width: 1300px){
        max-width: 1250px;
    }
    @media screen and (max-width: 1023px){
        padding: 0 1rem;
    }
`

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.bodyColor};
        color: ${props => props.theme.fontColor};
    }
    *{
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;
        box-sizing: border-box;
    }
`