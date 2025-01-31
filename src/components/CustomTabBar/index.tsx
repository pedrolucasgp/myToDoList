import React, { forwardRef } from "react";
import { View, Alert } from "react-native"
import { PlatformPressable, Text } from "@react-navigation/elements"
import { style } from "./styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CustomTabBar({state, descriptors, navigation}){

    const isHomeScreen = state.routes[state.index].name === "Home"

    const icons = {
        AddTask: "format-list-bulleted-add",
        ListTasks: "format-list-bulleted"
    }

    if(isHomeScreen){
        return null;
    }

    function redirectList(){
        Alert.alert('Go to list.')
    }
    function redirectAdd(){
        Alert.alert('Go to add.')
    }

    return(
            <View style={style.tabGroup}>
                {state.routes.map((route, index)=> {
                    const { options } = descriptors[route.key]

                    const isFocused = state.index === index

                    const onPress = () => {
                        const event = navigation.emit({
                          type: 'tabPress',
                          target: route.key,
                          canPreventDefault: true,
                        });
              
                        if (!isFocused && !event.defaultPrevented) {
                          navigation.navigate(route.name, route.params)
                        }
                      };
                      return(
                        <PlatformPressable
                            key={route.name}
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarButtonTestID}
                            onPress={onPress}
                            style={{ flex: 1 }}
                            >
                            <MaterialIcons 
                                name={icons[route.name as keyof typeof icons] as any} 
                                size={40}
                                color={ isFocused ? "#9597F4" : "gray"}
                            />
                            
                        </PlatformPressable>
                      )
                })}

                
                
            </View>
            
    )
}