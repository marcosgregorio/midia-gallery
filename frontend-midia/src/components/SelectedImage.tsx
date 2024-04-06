import { Image, StyleSheet, View } from "react-native";
import { GalleryImageType } from "./Gallery";

type SelectedImageProps = {
    source: GalleryImageType;
}

export const SelectedImage = ({ source }: SelectedImageProps) => {
    return (
        <View style={ style.selectedImageBox }>
            <Image style={ style.selectedImageStyle } source={ { uri: source.uri } }/>
        </View>
    )
}

const style = StyleSheet.create({
    selectedImageBox: {
        alignItems: "center",
        justifyContent: "center",
    },
    selectedImageStyle: {
        width: '70%',
        height: '70%',
    }
})
