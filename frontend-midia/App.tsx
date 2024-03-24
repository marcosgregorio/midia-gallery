import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { SelectImageInput } from "./src/components/SelectImageInput";

export type GalleryImage = {
    uri: string
}
export default function App() {
    const [images, setImage] = useState<GalleryImage[]>([]);

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
        <SafeAreaView style={ { padding: 10 } }>
            <View style={ style.selectImageInput }>
                <SelectImageInput selectImage={ (image) => {
                    setImage((prevImages) => [...prevImages, image])
                } }>

                </SelectImageInput>
            </View>
            <View style={ style.imageGrid }>
                {
                    images.map(
                        (image, index) => {
                            return (
                                <>
                                    <TouchableOpacity key={ index } onPress={ () => console.log('oiii ', index) }>
                                        <View style={ {} }>
                                            <Text style={ {
                                                backgroundColor: 'red',
                                                width: 20,
                                                height: 20,
                                                textAlign: 'center',
                                                borderRadius: 50,
                                                alignContent: 'center',
                                                textAlignVertical: 'center'
                                            } }>
                                                X
                                            </Text>
                                        </View>
                                        <Image key={ 'image_' + index } source={ { uri: image.uri } }
                                               style={ style.imageStyle }/>
                                    </TouchableOpacity>
                                </>
                            )
                        }
                    )
                }
            </View>

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    selectImageInput: {
        padding: 15,
    },

    imageGrid: {
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: 'wrap',
        padding: 10,
        gap: 6,
    },

    imageStyle: {
        width: 100,
        height: 100,
    }
})
