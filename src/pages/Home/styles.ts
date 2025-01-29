import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fffafa'
    },
    content:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        width:'100%'
    },
    logo:{
        width:80,
        height:80,
        marginTop: 50
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        padding: 30
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