import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SelectImageInput } from "./SelectImageInput";
import { GalleryImageType } from "../../App";
import { GalleryImage } from "./GalleryImage";

type GalleryProps = {}

export const Gallery = ({}: GalleryProps) => {
    const [ images, setImages ] = useState<GalleryImageType[]>([]);
    const [ selectedImage, setSelectedImage ] = useState<GalleryImageType>()

    const selectImage = (image: GalleryImageType) => {
        setImages((images) => [ ...images, image ]);
    }

    const removeImage = (index: number) => {
        setImages((prevImage) => {
            // Crie uma cópia do array de imagens usando slice()
            // Só para deixar como observação: o slice() é usado
            // para copiar os valores do array prevImage e crair um novo.
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
            <View style={ style.selectImageInput }>
                <SelectImageInput selectImage={ selectImage }>

                </SelectImageInput>
            </View>
            <View style={ style.imageGrid }>
                {
                    images.map(
                        (image, index) => {
                            return (
                                <GalleryImage
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
        </>
    )
}

const style = StyleSheet.create({
    selectImageInput: {
        padding: 15,
    },

    imageGrid: {
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: 'wrap',
        padding: 10,
        gap: 6,
    },

    imageStyle: {
        width: 100,
        height: 100,
    }
});