import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    container:{
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        width:'100%',
        height: '100%',
        backgroundColor: '#fffafa'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30
    },
    formGroup:{
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 25
    },
    input:{
        width: '100%',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10

    },
    detailsInput:{
        width: '100%',
        height: 100,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: 30,
        backgroundColor: '#9597F4',
        borderRadius: 10,
        marginBottom: 40
    },
    buttonText:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
})