import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { GalleryImageType } from "./Gallery";


type GalleryImageProps = {
    index: number;
    image: GalleryImageType;
    maximizeImage: (index: number) => void;
}
export const GalleryImage = ({ index, image, maximizeImage }: GalleryImageProps) => {
    return (
        <View>
            <TouchableOpacity key={ index } onPress={ () => maximizeImage(index) }>
                <Image key={ 'image_' + index } source={ { uri: image.uri } }
                       style={ style.imageStyle }/>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    imageStyle: {
        width: 80,
        height: 80,
    },

    imageGrid: {
        display: "none"
    },

    removeButton: {
        position: "relative",
        // zIndex: 9,
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 50,
    }
})