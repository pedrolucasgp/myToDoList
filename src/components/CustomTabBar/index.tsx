import React from "react";
import { View } from "react-native";
import { PlatformPressable } from "@react-navigation/elements";
import { style } from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CustomTabBar({ state, descriptors, navigation }) {
  const icons = {
    AddTask: "format-list-bulleted-add",
    ListTasks: "format-list-bulleted",
  };

  return (
    <View style={style.tabGroup}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        return (
          <PlatformPressable
            key={route.name}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
          >
            <MaterialIcons
              name={icons[route.name]}
              size={40}
              color={isFocused ? "#9597F4" : "gray"}
            />
          </PlatformPressable>
        );
      })}
    </View>
  );
}
