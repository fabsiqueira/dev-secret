import { createGlobalStyle } from 'styled-components'
import Theme from '../src/Theme'

const GlobalStyle = createGlobalStyle`
body {
    width: 100%;
    hight: 100%;
    margin: 0 auto;
    font-family: 'Fira Sans', sans-serif;
    background-color: ${({theme}) => theme.colors.primaryLight} 
} 
`
export default function App ({ Component, pageProps}){
    return (
        <Theme>
         <GlobalStyle/>
         <Component {...pageProps} />
        </Theme>
    )
}