// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface CommonTheme {
    productCardWidth: string,
    inputField: Function
  }
  export interface DefaultTheme extends CommonTheme{
    bodyColor: string
    fontColor: string
    primary: string
    secondary: string
    stroke: string
    placeholder: string
    shadowColor: string
    cardBgColor: string
    filterTabColor: string
    headerColor: string
  }
}