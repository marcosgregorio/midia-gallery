import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const App = () => {
    const [image, setImage] = useState<string | null>(null);

    const selectImage = async () => {
        const options = {
            title: 'Selecione uma imagem',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        try {
            const imagePicker = ImagePicker;
            console.log(options)
            if (imagePicker && options) {
                await imagePicker.launchCamera(options, (response   ) => {
                    if (response.didCancel) {
                        console.log('Usuário cancelou a seleção de imagem');
                    } else if (response.error) {
                        console.log('Erro ao selecionar imagem:', response.error);
                    } else {
                        const source = { uri: response.uri };
                        setImage(response.uri);
                    }
                });
            }
        } catch (e) {
            console.error("Deu ruim", e)
        }
    };

    return (
        <View style={styles.container}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Selecionar Imagem" onPress={selectImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
});

export default App;
