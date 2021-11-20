import React from "react"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
const Stack = createNativeStackNavigator();
import {useSelector} from "react-redux"
import Login from "../Pages/Login"
import AppNavigator from "./AppNavigator"
const AuthNavigator=()=>{
    const state=useSelector((state)=>state.auth)
    return(
    <>
        <NavigationContainer>
            <Stack.Navigator>
            {!state.login ? <Stack.Screen name="Login" component={Login} /> :
             <Stack.Screen name="App" component={AppNavigator}/>}
            </Stack.Navigator>
        </NavigationContainer>
    </>
    )
}

export default AuthNavigator;