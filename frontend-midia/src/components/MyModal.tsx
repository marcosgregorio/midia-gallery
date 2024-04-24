import { Alert, Modal, StyleSheet, Text, View } from "react-native";

type MyModalProps = {
    isModalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    animationType?: "fade" | "slide" | "none";
}
export const MyModal = ({ isModalVisible, setModalVisible, animationType }: MyModalProps) => {
    return (
        /*
        * @todo finalizar o modal de exclusão
        * */
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
                        <Text>
                            HElooooo
                        </Text>
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
        margin: 20,
        backgroundColor: '',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})