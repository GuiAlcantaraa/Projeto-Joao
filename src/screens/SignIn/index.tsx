import React, { useContext, useState } from 'react';
import { Container, Input, Title } from './styles';
import { Button } from '../../components/Button';
import { AuthContext } from '../../context/auth';
import { useNavigation } from '@react-navigation/native';


export function SignIn() {
const navigation = useNavigation()
  const [email, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
          <Title>Bem-vindo(a)</Title>
            
            <Input 
              placeholder='Email'
              value={email}
              onChangeText={setUsername}
            />

            <Input 
              placeholder='Senha'
              value={password}
              onChangeText={setPassword}
            />

          
            <Button
              title="Acessar"
              onPress={handleSign}
              />


            <Button
              title="Criar acesso"
              onPress={handleCreateSign}
              />

              {/* <Button
                icon="google"
                title="Entrar com Google"
                onPress={handleSign}
              /> */}
   </Container >
  );
}