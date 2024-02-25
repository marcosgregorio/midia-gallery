import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { SelectImageInput } from "./src/components/SelectImageInput";

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


    return (
        <SafeAreaView style={ { flex: 1, alignItems: 'center', padding: 30 } }>
            <View>
                <SelectImageInput selectImage={ (image) => {
                    setImage(image)
                } }>

                </SelectImageInput>
                { image && (
                    <>
                        <Text>Opaaaa</Text>
                        <Image source={ { uri: image } } style={ { width: 200, height: 200 } }/>
                    </>
                )
                }
            </View>

        </SafeAreaView>
    );
}
