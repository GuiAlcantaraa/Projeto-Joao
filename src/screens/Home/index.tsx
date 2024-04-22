import { useContext, useEffect } from 'react'
import { Container, TextHome } from './styles'
import { AuthContext } from '../../context/auth'


export function Home() {

    const { user } = useContext(AuthContext)

    useEffect(() => (
        console.log("USUARIO", user)
    ),[])

    return (
        <Container>
            <TextHome>Bem vindo(a)! ao app, {user?.username}</TextHome>
        </Container>

    )
}