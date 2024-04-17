import { Image, StyleSheet, View } from "react-native";
import { GalleryImageType } from "./Gallery";
import { CancelButton } from "./CancelButton";

type SelectedImageProps = {
    source: GalleryImageType;
    closeSelectedImage: () => void;
}

export const SelectedImage = ({ source, closeSelectedImage }: SelectedImageProps) => {
    return (
        <View style={ style.selectedImageBox }>
            <View>
                <CancelButton cancelAction={ closeSelectedImage }/>
            </View>
            <Image style={ style.selectedImageStyle } source={ { uri: source.uri } }/>
        </View>
    )
}

const style = StyleSheet.create({
    selectedImageBox: {
        // flex: 1,
        // backgroundColor: 'black',
        alignItems: "center",
    },
    selectedImageStyle: {
        width: '100%',
        height: '100%',
    }
})