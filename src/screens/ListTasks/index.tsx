import React, { useCallback, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { FlatList } from "react-native-gesture-handler";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function ListTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useFocusEffect(
    useCallback(() => {
      getTasks();
    }, [])
  );

  const getTasks = async () => {
    const storageContent = await getTasksFromStorage();

    if (storageContent !== null) {
      setTasks(JSON.parse(storageContent));
      return;
    }

    const apiTasks: Task[] = await fetchTasks();
    if (apiTasks) {
      const transformedData: Task[] = apiTasks.map((t) => ({
        id: String(t.id),
        title: t.title,
        completed: t.completed,
      }));

      await saveTaskListOnStorage(transformedData);
    }
  };

  const saveTaskListOnStorage = async (tasks: Task[]) => {
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getTasksFromStorage = async () => {
    const result = await AsyncStorage.getItem("tasks");
    return result;
  };

  const fetchTasks = async () => {
    const URL = "https://jsonplaceholder.typicode.com/users/3/todos";

    try {
      const response = await fetch(URL);
      const data: Task[] = await response.json();
      return data;
    } catch (error) {
      Alert.alert("Error", "Error to get tasks: " + error);
      return [];
    }
  };

  const handleCheck = (item: Task) => {
    const newTaskList = tasks.map((task) => {
      if (task.id === item.id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(newTaskList);
    saveTaskListOnStorage(newTaskList);
  };

  function handleDelete(item: Task) {
    const newTaskList = tasks.filter((task) => task != item);
    setTasks(newTaskList);
    saveTaskListOnStorage(newTaskList);
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Tasks List</Text>

      <FlatList
        keyExtractor={(item) => item.id}
        data={tasks}
        renderItem={({ item }) => (
          <View style={style.task}>
            <BouncyCheckbox
              style={style.taskTitle}
              size={20}
              fillColor="#9597F4"
              unFillColor="#FFFFFF"
              text={item.title}
              innerIconStyle={{ borderWidth: 2, borderColor: "gray" }}
              isChecked={item.completed}
              onPress={() => {
                handleCheck(item);
              }}
            />
            <TouchableOpacity
              style={style.button}
              onPress={() => handleDelete(item)}
            >
              <MaterialCommunityIcons name="delete" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
