import { Image, StyleSheet, Text, View } from "react-native";
import { GalleryImageType } from "./Gallery";
import { CancelButton } from "./CancelButton";
import { DeleteButton } from "./DeleteButton";
import { useState } from "react";
import { MyModal } from "./MyModal";

type SelectedImageProps = {
	source: GalleryImageType;
	closeSelectedImage: () => void;
	imageId: number;
	confirmImageDeletionCallback: (index: number) => void;
}


export const SelectedImage = ({
	                              source,
	                              closeSelectedImage,
	                              imageId,
	                              confirmImageDeletionCallback
                              }: SelectedImageProps) => {
	const [ isModalVisible, setModalVisible ] = useState(false);

	return (
		<View style={ style.selectedImageBox }>
			{
				isModalVisible && (
					<MyModal
						isModalVisible={ isModalVisible }
						setModalVisible={ setModalVisible }
						animationType={ "fade" }
						confirmCallback={ () => confirmImageDeletionCallback(imageId) }
					>
						<Text>
							Voce tem certeza que deseja excluir a imagem?
						</Text>
					</MyModal>
				)
			}
			<View style={ style.buttonsBox }>
				<CancelButton cancelAction={ closeSelectedImage } styleProp={ style.cancelButton }/>
				<DeleteButton deleteAction={ () => setModalVisible(true) } styleProp={ style.deleteButton }/>
			</View>
			<Image style={ style.selectedImageStyle } source={ { uri: source.uri } }/>
		</View>
	)
}

const style = StyleSheet.create({
	selectedImageBox: {
		marginTop: 10,
		flex: 1,
		flexBasis: '50%',
		gap: 10,
	},

	buttonsBox: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
	},
	/**
	 * @todo corrigir o estilo dos botões
	 * */
	cancelButton: {
		// bottom: -55,
		// right: '35%',
		// zIndex: 1,
	},
	deleteButton: {
		// bottom: -55,
		// right: '55%',
		// zIndex: 1,
	},
	selectedImageStyle: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	}
})