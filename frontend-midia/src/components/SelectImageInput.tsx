import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImagePickerResult } from "expo-image-picker";
import React, { useRef } from "react";
import { GalleryImageType } from "../../App";


type SelectImageInputProps = {
    selectImage: (image: GalleryImageType) => void
}

export const SelectImageInput = ({ selectImage }: SelectImageInputProps) => {
    const imageRef = useRef('')

    const pickImage = async () => {

        let result: ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [ 4, 3 ],
            quality: 1,
        });

        if (!result.assets?.length) {
            return;
        }

        if (!result?.canceled && result.assets[0].uri) {
            imageRef.current = result.assets[0].uri
        }
    };

    return (
        <View style={ style.imageSelectStyle }>
            <TouchableOpacity onPress={ async () => {
                await pickImage()
                const galleryImage = { uri: imageRef.current }
                return selectImage(galleryImage)
            } }>
                <Text>Selecione uma imagem...</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    imageSelectStyle: {
        // backgroundColor: 'red',
        width: '100%',
        padding: 15,
        borderStyle: 'solid',
        borderColor: '#c7c7c7',
        borderWidth: 1,
        borderRadius: 15,
    }
})