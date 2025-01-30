import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import AddTask from "../screens/AddTask";

export default function Routes(){
    const Tab = createBottomTabNavigator()
    
    return(
        <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ tabBarStyle: { display: "none" } }}
            />
            
            <Tab.Screen
                name="AddTask"
                component={AddTask}
                options={{ tabBarStyle: { display: "none" } }}
            />
        </Tab.Navigator>
    )
}