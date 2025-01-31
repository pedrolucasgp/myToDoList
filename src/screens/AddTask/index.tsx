import React from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import { style } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function AddTask(){

    function addTask(){
        Alert.alert('Task added.')
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>Add Task</Text>

            <View style={style.formGroup}>
                <View style={style.inputWrapper}>
                    <MaterialCommunityIcons style={{marginLeft: 20}} name="file-document-edit-outline" size={24} color="gray" />
                    <TextInput style={style.input} placeholder="Task Name" ></TextInput>
                </View>
                <View style={style.inputWrapper}>
                    <MaterialCommunityIcons style={{marginLeft: 20}} name="file-document-outline" size={24} color="gray" />
                        <View style={style.detailsInput}>
                            <TextInput
                                placeholder="Task Details"
                                multiline={true}
                                numberOfLines={5}>
                            </TextInput>
                        </View>
                </View>
            </View>

            <TouchableOpacity style={style.button} onPress={() => addTask()}>
                <Text style={style.buttonText}>+ Add Task</Text>
            </TouchableOpacity>

        </View>
    )
}