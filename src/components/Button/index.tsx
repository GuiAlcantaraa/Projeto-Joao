import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}