import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import { style } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function AddTask() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = async () => {
    if (inputValue != "") {
      const existingTasks = await getTasksFromStorage();

      const newTask: Task = {
        id: String(Date.now()),
        title: inputValue,
        completed: false,
      };

      const updatedTasks = [...existingTasks, newTask];

      await sendTasksToStorage(updatedTasks);

      setInputValue("");

      Alert.alert("Task added.");

      return;
    }

    Alert.alert("Task description cannot be empty.");
  };

  const sendTasksToStorage = async (tasks: Task[]) => {
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getTasksFromStorage = async () => {
    const result = await AsyncStorage.getItem("tasks");
    return result ? JSON.parse(result) : [];
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Add Task</Text>

      <View style={style.formGroup}>
        <View style={style.inputWrapper}>
          <MaterialCommunityIcons
            style={{ marginLeft: 20 }}
            name="file-document-edit-outline"
            size={24}
            color="gray"
          />
          <TextInput
            style={style.input}
            placeholder="Describe your task"
            value={inputValue}
            onChangeText={setInputValue}
          />
        </View>
      </View>

      <TouchableOpacity style={style.button} onPress={handleSubmit}>
        <Text style={style.buttonText}>+ Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}
