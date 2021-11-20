import React from 'react'
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'

const Settings=()=>{
    return(
    <>
        <View style={styles.container}>
            <TouchableOpacity style={styles.buto}>
                <Text style={styles.txt}>Manage Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buto}>
                <Text style={styles.txt}>Help Center</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buto}>
                <Text style={styles.txt}>Terms & Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buto}>
                <Text style={styles.txt}>Privacy Policies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buto}>
                <Text style={styles.txt}>Contact Us</Text>
            </TouchableOpacity>
        </View>
    </>
    )
}

const styles=StyleSheet.create({
     container:{
        flex:1,
        flexDirections: 'row',
        backgroundColor:'white',
        justifyContent: 'center',
     },
     buto:{
        flex:1,
        flexDirections:'column',
        backgroundColor:'red',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        borderColor:'white',
     },
     txt:{
        fontSize: 25,
        fontWeight: 'bold',
        color:'white',
        marginLeft:40
     }
})

export default Settings;