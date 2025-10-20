import { StyleSheet } from "react-native";
import {useFonts, ArchitectsDaughter_400Regular } from '@expo-google-fonts/architects-daughter'

const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c7cce4ff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logudbtn: {
        backgroundColor: '#a3aad1ff',
        marginTop: 40,
        marginBottom: 40,
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontWeight: '600',
    },
    tekst1: {
        fontFamily: "Comic Sans MS",
        fontWeight: '400',
        fontSize: 35,
        textAlign: 'center',
        top: -40,
        color: '#54469D',
        fontFamily: 'ArchitectsDaughter_400Regular',
    },
    tekst2: {
        fontFamily: "Comic Sans MS",
        fontWeight: '400',
        fontSize: 25,
        top: -90,
        textAlign: 'center',
        color: '#54469D',
        fontFamily: 'ArchitectsDaughter_400Regular',
    },
    logoSize: {
        width: 300,
        height: 300,
        top: -110,
        resizeMode: 'contain',
    },
    containerLogo: {
        width: '100%',
        height: 190,
        alignItems: 'center',
    },
    logudcontainer: {
        position: 'absolute',
        top: -30,
        right: 10,
    },
})

export default HomeStyle;