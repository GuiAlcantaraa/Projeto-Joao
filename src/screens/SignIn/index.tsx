import React, { useContext, useEffect, useState } from 'react';
import { ButtonCreate, 
  ButtonSubmit, 
  Container, 
  ContainerInput, 
  Input, 
  InputPassword, 
  IpuntArea, 
  TextCreate, 
  TextSubmit, 
  ViewImage } from './styles';
import { AuthContext } from '../../context/auth';
import { useNavigation } from '@react-navigation/native';
import { Image, Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'



export function SignIn() {
  const [email, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  const { handleSignin } = useContext(AuthContext)

 
  async function handleSign() {
    
    const credentials = {
      email,
      password
    }
    await handleSignin(credentials)
  }

  async function handleCreateSign() {
    navigation.navigate('CreateSign')
  }

  return (
    <Container>
        <ViewImage>
            <Image 
              source={require('../../../src/assets/logo.png')}
            />
        </ViewImage>

        <ContainerInput>
          <Input 
                placeholder='Email'
                autoCorrect={false}
                value={email}
                onChangeText={setUsername}
              />

            <Input 
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
          
        
        <ButtonSubmit onPress={handleSign}>
           <TextSubmit>Acessar</TextSubmit>
        </ButtonSubmit>

        <ButtonCreate onPress={handleCreateSign}>
           <TextCreate>Criar conta</TextCreate>
        </ButtonCreate>

      </ContainerInput>

        
   </Container >
  );
}