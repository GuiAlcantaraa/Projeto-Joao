import React, { useContext, useEffect, useState } from 'react'
import { Container, ContainerImage, Input, Photo, StyledImage, StyledText, StyledTouchableOpacity, StyledViewImage} from './styles'
import { AuthContext } from '../../context/auth'
import api from '../../services/api'
import { Button } from '../../components/Button'
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'


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

    const[nome, setNome] = useState('')
    const[descricao, setDescricao] = useState('')
    const[valor, setValor] = useState('')
    const[dataRevelacao, setDataRevelacao] = useState('')
    const [image, setImage] = useState('')

    const navigation = useNavigation()


    async function handleCreateGroup() {
        const status = 1
        const imagem = ""

        const create = await api.post('gruposUsuarios', {
            idUsuario: user?.id,
            grupo: {
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
          navigation.navigate("Grupos")
        }
      }

      async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        if (!result.canceled) {
             console.log('imageeee', result.assets[0].uri)
             setImage(result.assets[0].uri);
        }
    }
    
    return (
        <Container>
            <ContainerImage>
                {image ? <Photo source={{ uri: image }}/> : (
                    <MaterialIcons name="add-a-photo" size={50} color="white" onPress={pickImage}/>
                    )}
            </ContainerImage>
       
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