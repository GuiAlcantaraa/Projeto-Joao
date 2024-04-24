import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #F4F5F6;
  padding: 24px;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
    height: 50px;
    width: 200px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    background-color: #35AAFF;
`

export const StyledText = styled.Text`
    color: white;
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

export const StyledViewImage = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

export const StyledImage = styled.Image`
    border-radius: 50px;
    width: 100;
    height: 100;
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