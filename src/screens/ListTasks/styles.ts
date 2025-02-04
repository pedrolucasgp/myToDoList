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
        width: '90%',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'left',
        color: '#595bb3',
        margin: 30,
    },
    button:{
        width: '10%'
    },
    centeredModal:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    modalView:{
    margin: 20,
    backgroundColor: '#fffafa',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    borderColor: '#333333',
    borderWidth: 0.5,
    gap: 15
    },
    modalTitle:{
        fontSize: 20,
        fontWeight: 'bold' 
    },
    modalText:{
        fontSize: 15
    },
    modalButtonGroup:{
        flexDirection: 'row',
        gap: 50,
        display: 'flex'
    },
    modalButton:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        height: 30,
        borderRadius: 10,
        borderWidth: 0.5
    },
    blur:{
        position: 'absolute',
        width: '120%',
        height: '120%',
        zIndex: 1
    },
    searchBar:{
        width:'100%',
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        gap: 5,
        marginBottom: 20
    }
})