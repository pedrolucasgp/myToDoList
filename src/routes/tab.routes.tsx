
import AddTask from "../screens/AddTask";
import ListTasks from "../screens/ListTasks";
import CustomTabBar from "../components/CustomTabBar" 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator
            initialRouteName="ListTasks"
            screenOptions={{ headerShown: false }}
            tabBar={ (props) =>  <CustomTabBar {...props}/> }
        >
        <Tab.Screen
            name="ListTasks"
            component={ListTasks}
        />

        <Tab.Screen
            name="AddTask"
            component={AddTask}
        />   
        </Tab.Navigator>
    )
}

