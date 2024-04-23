import styled from 'styled-components/native';
import { Animated } from 'react-native';


export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #F4F5F6;
  justify-content: center;
  align-items: center;
  background-color: #191919;
`;

export const ViewImage = styled.View`
  flex: 1;
  justify-content: center;
  
  `

export const ContainerInput = styled(Animated.View)`

    flex: 1;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding-bottom: 50px;

`
export const Input = styled.TextInput `
  background-color: white;
  width: 90%;
  margin-bottom: 15px;
  color: #222;
  border-radius: 7px;
  font-size: 17px;
  padding: 10px;

`

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #35AAFF;
    width: 90%;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 7px;

`

export const TextSubmit = styled.Text`
  color: #FFF;
  font-size: 18px;

`

export const ButtonCreate = styled.TouchableOpacity`
    margin-top: 10px;

`

export const TextCreate = styled.Text`
  color: #FFF;

`

export const IpuntArea = styled.View`
  flex-direction: row;
  width: 90%;
  height: 50px;
  align-items: center;
  background-color: white;


`


export const InputPassword = styled.TextInput`
  width: 85%;
  height: 50px;


`