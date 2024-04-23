import React, { useContext } from 'react';

import { Container, Photo, Name, Email } from './styles';
import { AuthContext } from '../../context/auth';

export function User() {
    const { user } = useContext(AuthContext)

  return (
    <Container>
      <Photo
        source={{ uri: "https://github.com/GuiAlcantaraa.png" }}
      />

      <Name>{user?.name} </Name>
      <Email>{user?.email}</Email>
    </Container>
  );
}
