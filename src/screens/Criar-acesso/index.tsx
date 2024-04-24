import React, { useState } from 'react';
import { ButtonVoltar, Container, ContainerImage, Input, Photo, TextVoltar } from './styles';
import { Button } from '../../components/Button';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

export function CreateSign() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [image, setImage] = useState('')

  const navigation = useNavigation()


  async function handleCreateSign() {

    if(name === '' || email === '' || password === ''){
      alert("Iforme os dados corretamente.")
      return
    }

    if(password !== confirmPassword){
      alert("As senhas devem ser iguais.")
      return;
    }


    const create = await api.post('usuario', {
      name,
      email,
      password,
      image
    })


    if(create.status === 201){
      alert("Usuario criado com sucesso!")
      navigation.navigate('Login')
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
              placeholder='Nome completo'
              value={name}
              onChangeText={setName}
            />

            <Input 
              placeholder='Email'
              value={email}
              onChangeText={setEmail}
            />

            <Input 
              placeholder='Senha'
              value={password}
              onChangeText={setPassword}
            />

            <Input 
              placeholder='Confirme sua senha'
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

          
            <Button
              title="Criar"
              onPress={handleCreateSign}
            />

            <ButtonVoltar onPress={() => navigation.goBack()}>
                <TextVoltar>Voltar</TextVoltar>
            </ButtonVoltar> 
             
   </Container >
  );
}