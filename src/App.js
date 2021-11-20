import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {View,Text} from 'react-native'
import Admin from './Pages/Admin'
import {Provider} from "react-redux"
import {store} from "./store"
import AuthNavigator from "./Navigators/AuthNavigator"
const App=()=>{
    return(
    <>
        <AuthNavigator/>
    </>
   )
}

export default App