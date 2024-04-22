import React, { useContext, useState } from 'react';
import { Container, Input, Title } from './styles';
import { Button } from '../../components/Button';
import { AuthContext } from '../../context/auth';


export function CreateSign() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')



  async function handleCreateSign() {

  }

  return (
    <Container>
          <Title>Criação de usuario</Title>
            

          <Input 
              placeholder='Nome completo'
              value={username}
              onChangeText={setUsername}
            />

            <Input 
              placeholder='Email'
              value={username}
              onChangeText={setUsername}
            />

            <Input 
              placeholder='Senha'
              value={password}
              onChangeText={setPassword}
            />

            <Input 
              placeholder='Confirme sua senha'
              value={password}
              onChangeText={setPassword}
            />

            


            <Button
              title="Criar"
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