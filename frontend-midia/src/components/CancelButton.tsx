import { Image, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

type CancelButtonProps = {
	cancelAction?: () => void;
	styleProp?: StyleProp<ViewStyle>;
}

export const CancelButton = ({ cancelAction, styleProp }: CancelButtonProps) => {
	return (
		<TouchableOpacity onPress={ cancelAction } style={ styleProp }>
			<Image source={ require('../../assets/marca-x.png') } style={ style.icon }/>
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	cancelButton: {},
	icon: {
		width: 50,
		height: 50,
	}
})
