import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImagePickerResult } from "expo-image-picker";
import { useState } from "react";

type SelectImageInputProps = {
    selectImage: (image: string) => void
}

/*
*
* Tá tendo um bug ao clicar no botao de selecionar imagem.
* só após a segunda vez clicada q funciona a troca de imagem.
 */
export const SelectImageInput = ({ selectImage }: SelectImageInputProps) => {
    const [image, setImage] = useState<string>("");

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
        <View style={ style.imageSelectStyle }>
            <TouchableOpacity onPress={ async () => {
                await pickImage()
                console.log(image)
                return selectImage(image)
            }
            }>
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