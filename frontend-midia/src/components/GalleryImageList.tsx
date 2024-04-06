import { StyleSheet, View, } from "react-native";
import React from "react";
import { GalleryImage } from "./GalleryImage";
import { GalleryImageType } from "./Gallery";

type GalleryImageListProps = {
    images: GalleryImageType[];
    removeImage: (index: number) => void;
    maximizeImage: (index: number) => void;
}
export const GalleryImageList = ({ images, removeImage, maximizeImage }: GalleryImageListProps) => {
    return (
        <View style={ style.imageGrid }>
            {
                images.map(
                    (image, index) => {
                        return (
                            <GalleryImage
                                key={ index + "_image" }
                                index={ index }
                                image={ image }
                                removeImage={ (index) => removeImage(index) }
                                maximizeImage={ (index) => maximizeImage(index) }
                            />
                        )
                    }
                )
            }
        </View>
    )
}

const style = StyleSheet.create({
    imageGrid: {
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: 'wrap',
        padding: 10,
        gap: 6,
    },
})