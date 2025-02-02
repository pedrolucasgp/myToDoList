import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { style } from "./styles";
import { FlatList } from "react-native-gesture-handler";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Task { userId : number,  id : number, title : string, completed: boolean }
export default function ListTasks(){
    const[tasks, setTasks] = useState<Task[]>()

    useEffect(() => {
        getTasks()
        alert("resetou")
    }, [])


    const getTasks = async () => {
        try{
            const storageContent = await getTasksFromStorage()
            if(storageContent != null){
                setTasks(JSON.parse(storageContent))
            } else {
                const apiTasks: Task[] = await fetchTasks()
                if (apiTasks) {
                    await saveTaskListOnStorage(apiTasks)
                }
                setTasks(apiTasks)
            }
        } catch {
            Alert.alert("Error", "Error retrieving tasks from storage or api.")
        }




        // const apiTasks = await getTasks()
        // await AsyncStorage.setItem('tasks', JSON.stringify(apiTasks))
        // const storedTasks = await AsyncStorage.getItem('tasks')
        // console.log("storaged" + (storedTasks ? JSON.parse(storedTasks) : []))
        // setTasks(storedTasks ? JSON.parse(storedTasks) : [])
    }

    const saveTaskListOnStorage = async (tasks: Task[]) => {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks))
    }

    const getTasksFromStorage = async () => {
        return await AsyncStorage.getItem('tasks')
    }

    const fetchTasks = async () => {
        const URL = 'https://jsonplaceholder.typicode.com/users/3/todos'

        try{
            const response = await fetch(URL);
            const data: Task[] = await response.json();
            return data;
        }catch(error){
            Alert.alert("Error", "Error to get tasks: " + error)
            return [];
        }
    }

    return(
        <View style={style.container}>
            <Text style={style.title}>Tasks List</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => 
                    <View style={style.task}>
                        <BouncyCheckbox style={{}}
                            size={20}
                            fillColor="#9597F4"
                            unFillColor="#FFFFFF"
                            text={item.title}
                            innerIconStyle={{ borderWidth: 2, borderColor: 'gray' }}
                            isChecked={item.completed}
                            onPress={(isChecked: boolean) => {}}
                            />
                            <Text style={{width: '20%'}}>button</Text>
                    </View>
                }
            />
        </View>
    )
}