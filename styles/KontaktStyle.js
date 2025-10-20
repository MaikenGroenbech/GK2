import { StyleSheet } from "react-native";

const KontaktStyle = StyleSheet.create({
    container: {
        flex: 1,

    },
    tekstBoxKontakt: {
        paddingLeft: 20,
    },
    textKontakt: {
        fontSize: 40,
        top: 15,
        fontFamily: "Inter",
    },
    space: {
        height: 1,
        backgroundColor: "lightgrey",
        width: "100%",
    },
    Info: {
        fontFamily: "Inter",
        fontSize: 16,
        paddingTop: 15,
        paddingLeft: 20,
    },
    InfoNumber: {
        fontFamily: "Inter",
        fontWeight: "bold",
    }, 
    InfoMail: {
      fontFamily: "Inter",
      fontWeight: "bold",      
      textDecorationLine: 'underline',
    },
    containerLogo: {

    },
    containerLogo: {
        flex: 0.5,
        backgroundColor: '#a3aad1ff',
        width: '100%',
        height: 190,
        alignItems: 'center',
    },
    logoSize: {
        top: -50,
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    text2Kontakt: {
        fontSize: 13,
        paddingTop: 20,
        paddingBottom: 15,
        fontFamily: "Inter",   
    }
})

export default KontaktStyle;