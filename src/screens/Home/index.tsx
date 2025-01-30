import React from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation<NavigationProp<any>>()

    function redirect(){
        navigation.navigate("AddTask")
    }

    return (
                <View style={style.container}>
                    <Image
                        source={Logo}
                        resizeMode='contain'
                    />
                    
                    <Text style={style.title}>Task Manager</Text>
                    
                    <Text style={style.text}>Manage your tasks efficiently and easily with Task Manager!</Text>

                    <TouchableOpacity style={style.button} onPress={()=> redirect()}>
                       <Text style={style.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
    )
}