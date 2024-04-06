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
    const [ selectedImage, setSelectedImage ] = useState<GalleryImageType>()

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

    const maximizeImage = (index: number) => {
        setSelectedImage(images[index]);
    }

    return (
        <>
            { !selectedImage
                ? (
                    <>
                        <View style={ style.selectImageInput }>
                            <SelectImageInput selectImage={ selectImage }/>
                        </View>
                        <GalleryImageList images={ images } removeImage={ removeImage }
                                          maximizeImage={ maximizeImage }/>
                    </>
                )
                : <SelectedImage source={ selectedImage }/>
            }
        </>
    )
}

const style = StyleSheet.create({
    selectImageInput: {
        padding: 15,
    },
});