import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from "../Pages/Login"
import Profile from "../Pages/Profile"
import Settings from "../Pages/Settings"
import User from "../Pages/User"
import Admin from "../Pages/Admin"
import {useSelector} from "react-redux"
const Drawer = createDrawerNavigator();
const AppNavigator=()=>{
    const state=useSelector((state)=>state.auth)
    return(
      <Drawer.Navigator initialRouteName="App">
        {state.type===0 ? <Drawer.Screen name="Home" component={Admin} /> :
                <Drawer.Screen name="Home" component={User} />}
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Logout" component={Login} />
      </Drawer.Navigator>
    )
}

export default AppNavigator;