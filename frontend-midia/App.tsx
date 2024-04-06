import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Gallery } from "./src/components/Gallery";


export default function App() {

    useEffect(() => {
        (async () => {
            if (Constants?.platform?.ios) {
                const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
                if (status !== 'granted') {
                    alert('Desculpe, precisamos de permissão para acessar a câmera.');
                }
            }
        })();
    }, []);

    return (
        <SafeAreaView style={ style.safeAreaStyle }>
            <Gallery/>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    safeAreaStyle: {
        padding: 10
    }
})