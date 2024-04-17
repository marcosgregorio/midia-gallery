import { Alert, Modal, Text, View } from "react-native";

type MyModalProps = {
    isModalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}
export const MyModal = ({ isModalVisible, setModalVisible }: MyModalProps) => {
    return (
        <Modal
            animationType={ "slide" }
            visible={ isModalVisible }
            onRequestClose={ () => {
                Alert.alert("Modal fechado");
                setModalVisible(!isModalVisible);
            } }>
            <View style={ }>
                <Text>
                    HElooooo
                </Text>
            </View>
        </Modal>
    )
}