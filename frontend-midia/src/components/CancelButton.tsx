import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

type CancelButtonProps = {
    cancelAction?: () => void;
}

export const CancelButton = ({ cancelAction }: CancelButtonProps) => {
    return (
        <View style={ style.cancelButton }>
            <TouchableOpacity onPress={ cancelAction }>
                <Image source={ require('../../assets/marca-x.png') } style={ style.icon }/>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    cancelButton: {
        position: 'absolute',
        bottom: -55,
        right: '35%',
        zIndex: 1,
    },
    icon: {
        width: 50,
        height: 50,
    }
})
