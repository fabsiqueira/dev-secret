import styled from 'styled-components'

const Backgound = styled.div `
    background-image: url('/background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export default function ImageContainer ({ children}) {
    return <Backgound>{children}</Backgound>
}