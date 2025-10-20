import { StyleSheet } from "react-native";

const OpretStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c7cce4ff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    loginContainer: {
        width: '100%', 
        backgroundColor: '#ffffffff',
        padding: 20,
        borderRadius: 30,
    },
    buttonContainer: {
        backgroundColor: '#7a78c7ff',
        marginTop: 40,
        marginBottom: 40,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 70,
    },
    buttonTekst: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
        color: '#ffffffff',
    },
    inputFelt: {
        paddingTop: 5,
        borderColor: "#626060ff",
        borderBottomWidth: 1,
        textAlign: 'left',
        width: '100%',
        marginTop: 10,
    },
    inputOverskrift: {
        marginTop: 40,
        fontWeight: '600',
        textAlign: 'left',
        color: '#4E499B'
    },
    containerTo: {
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    linje: {
        flex: 1,
        height: 1,
        backgroundColor: '#626060ff',
    },
    tekst: {
        textAlignVertical: 'center',
        marginHorizontal: 10,
        lineHeight: 16,
    },
    overskrift: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4E499B'
    },
    containerLogo: {
        flex: 1,
        backgroundColor: '#5a93a0ff',
        width: '100%',
        
    },
    containerLogo: {
        width: '100%',
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoSize: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
    },

})

export default OpretStyle;