import React from 'react'
import {Image,Text,View,TouchableOpacity,StyleSheet} from 'react-native'

const User=()=>{
    return(
    <>
        <View style={styles.container}>
            <Text style={styles.txt}>
                Welcome User!!!
            </Text>
            <View style={styles.cont}>
                <Image style={styles.imag} source={require('../images/user.png')} />
            </View>
            <View style={styles.cont}>
                <Text style={styles.txt}>
                    Happy Browsing!!!
                </Text>
            </View>
        </View>
    </>
    )
}

const styles=StyleSheet.create({
    cont:{
        justifyContent: 'center',
        alignItems:'center'
    },
    imag:{
        width:200,
        height:200,
        borderRadius:200
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
        marginBottom:20
    }
})

export default  User;