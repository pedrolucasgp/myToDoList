import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        width:'100%',
        height: '100%',
        backgroundColor: '#fffafa'
    },
    task: {
        borderColor: '#333333',
        borderWidth: 0.5,
        alignItems : 'center',
        flexDirection: 'row',
        marginVertical: 10,
        maxWidth: '100%',
        padding: 10,
        borderRadius: 10
    },
    taskTitle:{
        maxWidth: '100%',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'left',
        color: '#595bb3',
        margin: 30,
    }
})