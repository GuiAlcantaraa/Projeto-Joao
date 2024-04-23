import { useContext } from 'react'
import { Container, Button, Title } from './styles'
import { AuthContext } from '../../context/auth'
import { User } from '../../components/User'


export function Home() {
    const { handleSignOut } = useContext(AuthContext)


    return (
        <Container>
            <User />

           <Button onPress={handleSignOut}>
                 <Title>Sair</Title>
           </Button>
        </Container>

    )
}