import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Gallery } from "./src/components/Gallery";

export type GalleryImageType = {
    uri: string
}


export default function App() {

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
        <SafeAreaView style={ style.safeAreaStyle }>
            <Gallery/>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    safeAreaStyle: {
        padding: 10
    }
})
// <View style={ style.selectImageInput }>
//     <SelectImageInput selectImage={ (image) => {
//         setImage((prevImages) => [...prevImages, image])
//     } }>
//
//     </SelectImageInput>
// </View>
// <View style={ style.imageGrid }>
//     {
//         images.map(
//             (image, index) => {
//                 return (
//                     <>
//                         <TouchableOpacity key={ index } onPress={ () => console.log('oiii ', index) }>
//                             <View style={ {} }>
//                                 <Text style={ {
//                                     backgroundColor: 'red',
//                                     width: 20,
//                                     height: 20,
//                                     textAlign: 'center',
//                                     borderRadius: 50,
//                                     alignContent: 'center',
//                                     textAlignVertical: 'center'
//                                 } }>
//                                     X
//                                 </Text>
//                             </View>
//                             <Image key={ 'image_' + index } source={ { uri: image.uri } }
//                                    style={ style.imageStyle }/>
//                         </TouchableOpacity>
//                     </>
//                 )
//             }
//         )
//     }
// </View>
