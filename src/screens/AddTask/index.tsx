import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import { style } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface task { id : number, title : string, completed: boolean }
export default function AddTask(){
    const [inputValue, setInputValue] = useState<string>('')

    const addTask = async () => {
        let task: task = {id: Date.now(), title: inputValue, completed: false}
            try{
                const existingTasks = await AsyncStorage.getItem('tasks');
                const tasks: task[] = existingTasks ? JSON.parse(existingTasks) : [];
                tasks.push(task);
                await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
                Alert.alert('Task added.')
                setInputValue('')
            }catch(error){
                console.log(error)
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>Add Task</Text>

            <View style={style.formGroup}>
                <View style={style.inputWrapper}>
                    <MaterialCommunityIcons style={{marginLeft: 20}} name="file-document-edit-outline" size={24} color="gray" />
                    <TextInput 
                        style={style.input}
                        placeholder="Describe your task"
                        value={inputValue}
                        onChangeText={setInputValue}
                    >
                    </TextInput>
                </View>
            </View>

            <TouchableOpacity style={style.button} onPress={addTask}>
                <Text style={style.buttonText}>+ Add Task</Text>
            </TouchableOpacity>

        </View>
    )
}