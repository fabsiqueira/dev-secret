import styled from 'styled-components'

const Backgound = styled.div `
    background-image: url('/giftBackground.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export default function GiftContainer ({ children}) {
    return <Backgound>{children}</Backgound>
}