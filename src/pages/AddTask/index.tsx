import React from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import { style } from "./styles";

export default function AddTask(){

    function addTask(){
        Alert.alert('Task added.')
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>Add Task</Text>

                <View style={style.formGroup}>
                    <TextInput style={style.input} placeholder="(icon) Task Name" ></TextInput>

                    <View style={style.detailsInput}>
                        <TextInput
                            placeholder="(icon) Task Details"
                            multiline={true}
                            numberOfLines={5}>
                        </TextInput>
                    </View>
                </View>
                
                <TouchableOpacity style={style.button} onPress={() => addTask()}>
                    <Text style={style.buttonText}>(icon) Add Task</Text>
                </TouchableOpacity>
        </View>
    )
}