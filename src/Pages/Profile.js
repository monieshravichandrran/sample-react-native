import React from 'react'
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {useDispatch,useSelector} from "react-redux"
const Profile=()=>{
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        dispatch(
        {
            type:"SIGN_IN",
            payload:{
                login:false,
                type:-1
            }
        })
    }
    const state = useSelector((state)=> state)
    return(
        <>
            <View style={styles.cont}>
                <Image style={styles.imag} source={require('../images/avatar.png')}/>
            </View>
            <View style={styles.container}>
                <View style={styles.buto}>
                    <Text style={styles.txt}>
                        UserName: {state.detail.username}
                    </Text>
                </View>
                <View style={styles.buto}>
                    <Text style={styles.txt}>
                        Email: {state.detail.email}
                    </Text>
                </View>
                <View style={styles.buto}>
                    {state.auth.type===0 ? <Text style={styles.txt}> Account Type - Admin</Text> :
                     <Text style={styles.txt}> Account Type - User</Text> }
                </View>
                <TouchableOpacity style={styles.logout} onPress={logoutHandler}>
                    <Text style={styles.logtxt}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirections:'row'
    },
    buto:{
        flex:1,
        flexDirections: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:3,
        borderRadius:10,
        borderColor:'white'
    },
    txt:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    imag:{
        width:200,
        height:200,
        borderRadius:200
    },
    cont:{
        justifyContent:'center',
        alignItems: 'center'
    },
    logout:{
            flex:1,
            flexDirections: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth:3,
            borderRadius:10,
            borderColor:'white',
            backgroundColor:'red'
    },
    logtxt:{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white'
    }
})

export default Profile;