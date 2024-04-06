import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { GalleryImageType } from "../../App";


type GalleryImageProps = {
    index: number;
    image: GalleryImageType;
    removeImage: (index: number) => void;
    maximizeImage: (index: number) => void;
}
export const GalleryImage = ({ index, image, removeImage, maximizeImage }: GalleryImageProps) => {
    return (
        <View>
            {/*<TouchableOpacity onPress={ () => removeImage(index) } style={ style.removeButton }>*/ }
            {/*    <Text style={ {*/ }
            {/*        textAlign: 'center',*/ }
            {/*        color: 'white',*/ }
            {/*    } }>*/ }
            {/*        X*/ }
            {/*    </Text>*/ }
            {/*</TouchableOpacity>*/ }

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