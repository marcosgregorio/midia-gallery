import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SelectImageInput } from "./SelectImageInput";
import { GalleryImageList } from "./GalleryImageList";
import { SelectedImage } from "./SelectedImage";


export type GalleryImageType = {
    uri: string
}
type GalleryProps = {}
export const Gallery = ({}: GalleryProps) => {
    const [ images, setImages ] = useState<GalleryImageType[]>([]);
    const [ selectedImage, setSelectedImage ] = useState<GalleryImageType | null>(null)

    const selectImage = (image: GalleryImageType) => {
        setImages((images) => [ ...images, image ]);
    }

    /**
     * Só para deixar como observação: o slice() é usado
     * para copiar os valores do array prevImage e criar
     * um novo
     */
    const removeImage = (index: number) => {
        setImages((prevImage) => {
            const newImage = prevImage.slice();
            newImage.splice(index, 1);
            return newImage;
        });
    }

    const setMaximizedImage = (index: number) => {
        const imagesCopy = images.slice();
        const galleryImage = imagesCopy[index];
        setSelectedImage(galleryImage);
    }

    return (
        <View style={ style.galleryStyle }>
            { !selectedImage
                ? (
                    <>
                        <View style={ style.selectImageInput }>
                            <SelectImageInput selectImage={ selectImage }/>
                        </View>
                        <GalleryImageList images={ images } maximizeImage={ setMaximizedImage }/>
                    </>
                )
                : <SelectedImage source={ selectedImage } closeSelectedImage={ () => setSelectedImage(null) }/>
            }
        </View>
    )
}

const style = StyleSheet.create({
    galleryStyle: {
        padding: 15,
    },

    selectImageInput: {
        padding: 15,
    },
});