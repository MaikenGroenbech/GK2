import { ScrollView, StyleSheet } from "react-native";

const ProgramStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerLogo: {
        flex: 1.5,
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
    programListeContainer: {
        flex: 3,
        alignItems: 'center',
    },
    overskrift: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '500',
        padding: 20,
        textDecorationLine: 'underline',

    },
    programListe: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        padding: 5.5,
        margin: 2,
        backgroundColor: '#e1e2eaff',
        borderRadius: 16,  
    },

})

export default ProgramStyle;