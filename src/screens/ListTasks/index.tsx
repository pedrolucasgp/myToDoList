import React, { useCallback, useEffect, useState } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { FlatList, TextInput } from "react-native-gesture-handler";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BlurView } from "expo-blur";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function ListTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [list, setList] = useState<Task[]>(tasks);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const [visible, setVisible] = useState(false);

  const [searchValue, setSearchValue] = useState<string>("");

  useFocusEffect(
    useCallback(() => {
      getTasks();
    }, [])
  );

  useEffect(() => {
    if (searchValue == "") {
      setList(tasks);
    } else {
      setList(
        tasks.filter((item) => {
          if (
            item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
          ) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searchValue]);

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

  function handleDelete() {
    if (!selectedTask) return;

    const newTaskList = tasks.filter((task) => task != selectedTask);
    setTasks(newTaskList);
    saveTaskListOnStorage(newTaskList);
    setVisible(!visible);
  }

  return (
    <View style={style.container}>
      {visible && <BlurView intensity={10} style={style.blur} />}
      <Text style={style.title}>Tasks List</Text>

      <View style={style.searchBar}>
        <MaterialCommunityIcons name="text-search" size={24} color="gray" />
        <TextInput
          placeholder="Search a task..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>

      <View>
        <Modal animationType="fade" transparent={true} visible={visible}>
          <View style={style.centeredModal}>
            <View style={style.modalView}>
              <Text style={style.modalTitle}> Delete task permanently? </Text>
              <Text style={style.modalText}>
                {" "}
                This action cannot be undone. Confirm?{" "}
              </Text>
              <View style={style.modalButtonGroup}>
                <TouchableOpacity
                  style={style.modalButton}
                  onPress={handleDelete}
                >
                  <Text style={{ color: "#9597F4", fontWeight: "bold" }}>
                    Yes
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={style.modalButton}
                  onPress={() => setVisible(!visible)}
                >
                  <Text style={{ color: "#d11507", fontWeight: "bold" }}>
                    No
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
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
              onPress={() => {
                setVisible(true);
                setSelectedTask(item);
              }}
            >
              <MaterialCommunityIcons name="delete" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
