import { Image, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";

type DeleteButtonProps = {
    deleteAction: () => void;
    styleProp?: StyleProp<ViewStyle>;
}
export const DeleteButton = ({ deleteAction, styleProp }: DeleteButtonProps) => {
    return (
        <View>
            <TouchableOpacity onPress={ deleteAction } style={ styleProp }>
                <Image source={ require('../../assets/delete.png') } style={ style.icon }/>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
    }
})
