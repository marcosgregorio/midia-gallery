import { Image, StyleSheet, View } from "react-native";
import { GalleryImageType } from "./Gallery";
import { CancelButton } from "./CancelButton";
import { DeleteButton } from "./DeleteButton";
import { useState } from "react";

type SelectedImageProps = {
    source: GalleryImageType;
    closeSelectedImage: () => void;
}


export const SelectedImage = ({ source, closeSelectedImage }: SelectedImageProps) => {
    const [ isModalVisible, setModalVisible ] = useState(false);

    return (
        <View style={ style.selectedImageBox }>
            <View>
                <CancelButton cancelAction={ closeSelectedImage } styleProp={ style.cancelButton }/>
                <DeleteButton deleteAction={ () => setModalVisible(true) } styleProp={ style.deleteButton }/>
            </View>
            <Image style={ style.selectedImageStyle } source={ { uri: source.uri } }/>
        </View>
    )
}

const style = StyleSheet.create({
    selectedImageBox: {
        alignItems: "center",
    },
    cancelButton: {
        position: 'absolute',
        bottom: -55,
        right: '35%',
        zIndex: 1,
    },
    deleteButton: {
        position: 'absolute',
        bottom: -55,
        right: '55%',
        zIndex: 1,
    },
    selectedImageStyle: {
        width: '100%',
        height: '100%',
        margin: 0,
    }
})