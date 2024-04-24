import styled from 'styled-components/native';

export const Container = styled.View`
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

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 100px;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #47474D;
`;

export const Email = styled.Text`
  font-size: 15px;
  color: #7A7A80;
  line-height: 25px;  
`;

export const ViewIcon = styled.Text`
 display: flex;
`;