import { useState } from "react";
import Main from "./Main";
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from './styles/themes'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return ( 
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <GlobalStyles/>
    <Main/>
  </ThemeProvider>
  )
}

export default App;
