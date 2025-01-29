import React from "react";
import { Text, View, Image, Button, Touchable, TouchableOpacity, Alert } from "react-native";
import { style } from "./styles";
import Logo from '../../assets/logo.png';

export default function Home(){

    function redirect(){
        Alert.alert('Redirect to list.')
    }

    return (
        <View style={style.container}>
                <View style={style.content}>
                    <Image
                        source={Logo}
                        style={style.logo}
                        resizeMode="contain"
                    />
                    <Text style={style.title}>Task Manager</Text>
                    <Text style={style.text}>Manage your tasks efficiently and easily with Task Manager!</Text>
                    <TouchableOpacity style={style.button} onPress={()=> redirect()}>
                       <Text style={style.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}