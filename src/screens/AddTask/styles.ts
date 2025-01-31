import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    container:{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 30,
        width:'100%',
        height: '100%',
        backgroundColor: '#fffafa'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 45
    },
    inputWrapper:{
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10
    },
    formGroup:{
        display: 'flex',
        flexDirection: 'column',
        gap: 30
    },
    input:{
        width: '100%',
        marginLeft: 5
    },
    detailsInput:{
        width: '100%',
        height: 100,
        marginLeft: 5
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: 30,
        backgroundColor: '#9597F4',
        borderRadius: 10,
        marginBottom: 30
    },
    buttonText:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
})