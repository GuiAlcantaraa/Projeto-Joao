import { useContext, useEffect, useState } from 'react'
import { Container, StyledText, StyledTouchableOpacity} from './styles'
import { AuthContext } from '../../context/auth'
import { GroupCard } from '../../components/GroupCard'
import api from '../../services/api'

interface IGroups {
    id: string,
    Descricao: string,
    status: number,
    imagem: string,
    nome: string,
    valor: string,
    dataRevelacao: string,
}


export function Grupos() {

    const { user } = useContext(AuthContext)
    const [ groups, setGroups ] = useState<IGroups[]>()

    async function getGroupsById(){
        const { data } = await api.get('gruposUsuarios',{
            params:{
                idUsuario: user?.id
            }
        })
        console.log("resposta", data[0].grupos)

        setGroups(data[0].grupos)
    }

    useEffect(() => {
        try {
            getGroupsById()
        } catch (error) {
            console.log("Erro ao buscar os dados: ", error);
        }
    }, [])

    
    return (
        <Container>
        
            {groups?.map((group) => {
                     return (
                           <GroupCard 
                                key={group.id} 
                                data={group} />
                        )
                    })}
           
        </Container>

    )
}