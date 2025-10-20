import { StyleSheet } from "react-native";

const ProfilStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#e1e2eaff',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        alignItems: 'center',
    },
    navn: {
        fontSize: 17,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    container2: {
        flex: 1,
        backgroundColor: '#e1e2eaff',
        borderRadius: 20,
        padding:20,
        margin: 20,
        justifyContent: 'center',
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
    userBillede: {
        width: 150,
        height: 150,
        padding: 10,
    },
    email: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500',
    }
})

export default ProfilStyle;