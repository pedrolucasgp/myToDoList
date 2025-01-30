import React, { forwardRef } from "react";
import { View, Alert } from "react-native"
import { style } from "./styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const NavigationBar = forwardRef(()=>{
    function redirectList(){
        Alert.alert('Go to list.')
    }
    function redirectAdd(){
        Alert.alert('Go to add.')
    }

    return(
            <View style={style.navigationGroup}>
                <MaterialIcons name="format-list-bulleted" size={40} color="gray" onPress={()=> redirectList()} />
                <MaterialIcons name="format-list-bulleted-add" size={40} color="gray" onPress={()=> redirectAdd()} />
            </View>
            
    )
})