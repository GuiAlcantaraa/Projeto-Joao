import { useContext, useEffect } from 'react'
import { Container, TextHome } from './styles'
import { AuthContext } from '../../context/auth'


export function Grupos() {

    const { user } = useContext(AuthContext)

    useEffect(() => (
        console.log("USUARIO", user)
    ),[])

    return (
        <Container>
            <TextHome>Grupossssssss</TextHome>
        </Container>

    )
}