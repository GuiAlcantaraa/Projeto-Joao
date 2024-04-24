import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #F4F5F6;
  padding: 24px;
  justify-content: center;
  align-items: center;
  background-color: black;
`;



export const Title = styled.Text`
  font-size: 34px;
  color: #FFFFFF;
  margin-bottom: 34px;
  font-weight: bold;
`;


export const Input = styled.TextInput `
  background-color: white;
  width: 90%;
  margin-bottom: 15px;
  color: #222;
  border-radius: 7px;
  font-size: 17px;
  padding: 10px;

`
export const ButtonVoltar = styled.TouchableOpacity`
    margin-top: 10px;
`


export const TextVoltar = styled.Text`
  color: #FFF;

`


export const ViewImage = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 60px;
  background-color: white;

`
export const BtnAddFoto = styled.TouchableOpacity`


`

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 200px;
`;



export const ContainerImage = styled.View`
     margin-bottom:30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    border-radius: 80px;
    width: 150px;
    height: 150px;
    background-color: gray !important;
`;