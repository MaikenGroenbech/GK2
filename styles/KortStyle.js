import { StyleSheet } from "react-native";

const KortStyle = StyleSheet.create({
    container: {
        flex: 1,
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
    container1: {
        flex: 1
    },
    space: {
        height: 1,
        backgroundColor: "#dcdeebff",
        width: "100%",
    },
    overskrifter: {
        padding: 20,
        fontSize: 29,
        fontFamily: 'Inter',
        fontWeight: '500',
    }, 
    kort: {
      paddingLeft: 20,
    },
    tekstKort: {
        fontSize: 17,
        fontWeight: '500',
    }, 
    kort: {
        paddingLeft: 20,
        paddingTop: 20,
    },
    kortBillede:{
        width: 350,
        height: 250,
        resizeMode: 'stretch',
    },
})

export default KortStyle;