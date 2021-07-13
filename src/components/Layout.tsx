import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

type Props = {
    children?: React.ReactNode
}
const Layout: React.FC<Props> = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}

export default Layout
