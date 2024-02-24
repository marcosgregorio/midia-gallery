import {SafeAreaView, StyleSheet, View} from "react-native";

type ContainerProps = SafeAreaView

export const Container = ({ props }: ContainerProps) => {
    return (
        <SafeAreaView style={styles.container}>
            {props.children}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
