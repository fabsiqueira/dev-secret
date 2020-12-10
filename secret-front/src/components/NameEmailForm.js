import styled from 'styled-components'
import Button from './Button'
import Input from './Input'

const Form = styled.form `
    flex: 1;
    display: flex;
    max-width: 900px;
    padding: 20px;

    @media (max-width: 500px){
        flex-direction: column;
    }
    > input, button {
        margin: 10px;
    }
`

function NameEmailForm ({buttonText}) {
    return (
        <Form>
            <Input
                placeholder= "Seu Nome"
                required
            />
            <Input
                type= "email"
                placeholder= "Seu E-mail"
                required
            />
            <Button>{buttonText}</Button> 
        </Form>
    )
}

NameEmailForm.defaultProps = {
    buttonText: "Criar"
}
export default NameEmailForm