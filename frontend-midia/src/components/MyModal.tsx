import { Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type MyModalProps = {
	isModalVisible: boolean;
	setModalVisible: (visible: boolean) => void;
	animationType?: "fade" | "slide" | "none";
	cancelCallback?: () => void;
	confirmCallback?: () => void;
	children: React.ReactNode;
}
export const MyModal = ({
	                        isModalVisible,
	                        setModalVisible,
	                        animationType,
	                        cancelCallback,
	                        confirmCallback,
	                        children
                        }: MyModalProps) => {
	return (
		<View style={ style.centeredView }>
			<Modal
				animationType={ animationType }
				transparent={ true }
				visible={ isModalVisible }
				onRequestClose={ () => {
					Alert.alert("Modal fechado");
					setModalVisible(!isModalVisible);
				} }>
				<View style={ style.centeredView }>
					<View style={ style.modalView }>
						{ children }
						<View style={ style.modalButtons }>
							<TouchableOpacity onPress={ cancelCallback }
							                  style={ [ style.buttonIconStyle, style.cancelModalButton ] }>
								<Image source={ require('../../assets/marca-x.png') }
								       style={ style.icon }/>
								<Text>
									Cancelar
								</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={ confirmCallback }
							                  style={ [ style.buttonIconStyle, style.confirmModalButton ] }>
								<Image source={ require('../../assets/confirmacao.png') }
								       style={ style.icon }/>
								<Text>
									Confirmar
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	)
}

const style = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignSelf: "center",
	},
	modalView: {
		backgroundColor: '#ffff',
		borderRadius: 20,
		padding: 35,
	},
	modalButtons: {
		flexDirection: "row",
		gap: 10,
		justifyContent: "flex-end",
	},
	icon: {
		width: 15,
		height: 15,
	},
	buttonIconStyle: {
		flexDirection: "row",
		gap: 2,
		alignItems: "center",
	},
	cancelModalButton: {},
	confirmModalButton: {},
})