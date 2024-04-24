import { useContext, useEffect, useState } from 'react'
import { Container, Input, StyledImage, StyledText, StyledTouchableOpacity, StyledViewImage} from './styles'
import { AuthContext } from '../../context/auth'
import { GroupCard } from '../../components/GroupCard'
import api from '../../services/api'
import { Text } from 'react-native'
import { Button } from '../../components/Button'
import * as ImagePicker from 'expo-image-picker';


interface IGroups {
    id: string,
    Descricao: string,
    status: number,
    imagem: string,
    nome: string,
    valor: string,
    dataRevelacao: string,
}


export function CreateGroup() {

    const { user } = useContext(AuthContext)
    const [ groups, setGroups ] = useState<IGroups[]>()

    const[nome, setNome] = useState('')
    const[descricao, setDescricao] = useState('')
    const[valor, setValor] = useState('')
    const[dataRevelacao, setDataRevelacao] = useState('')
    const [imagem, setImagem] = useState('');


    async function getGroupsById(){
        const { data } = await api.get('/gruposUsuarios',{
            params:{
                idUsuario: user?.id
            }
        })

        setGroups(data[0].grupos)
    }

    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImagem(result.assets[0].uri);
        }
    };

    async function handleCreateGroup() {
        const status = 1
        const imagem = ""

        const create = await api.post('gruposUsuarios', {
            idUsuario: user?.id,
            grupos: {
                nome,
                descricao,
                valor,
                dataRevelacao,
                status,
                imagem
            }
        })
    
    
        if(create.status === 201){
          alert("Grupo criado com sucesso!")
        }
      }
    
    return (
        <Container>
        
                 {/* <StyledViewImage>
                        {imagem && <StyledImage source={{ uri: imagem }} />}
                        <Button title="Selecione uma imagem da galeria" onPress={pickImage} />
                    </StyledViewImage> */}
                <Input 
                    placeholder='Nome do grupo'
                    onChangeText={setNome}
                />

                <Input 
                    placeholder='Descrição'
                    onChangeText={setDescricao}
                />

                <Input 
                    placeholder='Valor'
                    onChangeText={setValor}
                />

                <Input 
                    placeholder='Data revelação'
                    onChangeText={setDataRevelacao}
                />

            
                <Button
                    title="Criar"
                    onPress={handleCreateGroup}
                />

        </Container>

    )
}