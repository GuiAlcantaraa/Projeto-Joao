import React, { useContext, useState } from 'react';
import { Container, Input, Title } from './styles';
import { Button } from '../../components/Button';
import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';


export function CreateSign() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
      password
    })


    if(create.status === 201){
      alert("Usuario criado com sucesso!")
      navigation.navigate('Login')
    }
  }

  return (
    <Container>
          <Title>Criação de usuario</Title>
            

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

   </Container >
  );
}