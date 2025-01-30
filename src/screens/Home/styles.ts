import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
     container:{
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        padding: 20,
        width:'100%',
        height: '100%',
        backgroundColor: '#fffafa'
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
    },
    text:{
        textAlign: 'center',
        fontSize: 20
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 50,
        backgroundColor: '#9597F4',
        borderRadius: 10,
        marginTop: '100%'
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})