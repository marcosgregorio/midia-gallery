import React, { useState, useEffect } from 'react';
import {Button, Image, Text, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {ImagePickerResult} from "expo-image-picker";

export default function App() {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    (async () => {
      if (Constants?.platform?.ios) {
        const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (status !== 'granted') {
          alert('Desculpe, precisamos de permissão para acessar a câmera.');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result: ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.assets?.length) {
      return;
    }

    if (!result?.canceled && result.assets[0].uri) {
      const uri = result.assets[0].uri;
      setImage(uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Escolher Imagem" onPress={pickImage} />
      {image && (
          <>
            <Text>Opaaaa</Text>
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
          </>
        )
      }
    </View>
  );
}
