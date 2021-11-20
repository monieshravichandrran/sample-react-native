import React from 'react'
import {Image,Text,View,TouchableOpacity,StyleSheet} from 'react-native'

const Admin=()=>{
    return(
    <>
        <View style={styles.container}>
            <Text style={styles.txt}>
                Welcome Admin!!!
            </Text>
            <View style={styles.cont}>
                <Image style={styles.imag} source={require('../images/admin.jpg')} />
            </View>
            <View style={styles.cont}>
                <Text style={styles.txt}>
                    Manage your Users!!!
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
        width:400,
        height:400,
        borderRadius:400
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

export default  Admin;