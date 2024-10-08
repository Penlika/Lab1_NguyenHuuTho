import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import CreateNewAccountScreen from "../screens/CreateNewAccountScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import TodoApp from "../screens/todoApp";

const Stack=createStackNavigator()
const MyStack=()=>{
    return(
        <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="home" component={TodoApp}/>
            <Stack.Screen name="createNewAccount" component={CreateNewAccountScreen}/>
            <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen}/>
        </Stack.Navigator>
    )
}
export default MyStack