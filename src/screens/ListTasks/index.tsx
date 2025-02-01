import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { style } from "./styles";
import { FlatList } from "react-native-gesture-handler";

interface task { userId : number,  id : number, title : string, completed: boolean }
export default function ListTasks(){
    const[tasks, setTasks] = useState<task[]>()

    useEffect(() => {
        getTasks()
    }, [])

    const getTasks = () => {
        const URL = 'https://jsonplaceholder.typicode.com/todos'

        fetch(URL).then(response =>{
            return response.json()
        }).then(data=>{
            setTasks(data)
        })
    }

    return(
        <View style={style.container}>
            <Text style={style.title}>Tasks List</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => 
                    <View style={style.task}>
                        <Text style={style.taskTitle}>{item.title}</Text>
                    </View>
                }
            />
        </View>
    )
}