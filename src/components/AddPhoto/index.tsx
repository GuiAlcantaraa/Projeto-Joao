import React, { useContext, useState } from 'react';

import { Container, Photo, Name, Email, ViewIcon } from './styles';
import { AuthContext } from '../../context/auth';
import { MaterialIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';



export function AddPhoto() {

const [image, setImage] = useState('')


async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
 
        if (!result.canceled) {
             console.log('imageeee', result.assets[0].uri)
             setImage(result.assets[0].uri);
        }
    }

  return (
    <Container>
     
     {image ? <Photo source={{ uri: image }}/> : (
      <MaterialIcons name="add-a-photo" size={50} color="white" onPress={pickImage}/>
      )}

    </Container>
  );
}
