import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import {useDispatch,useSelector} from "react-redux"
export default function App() {
  const dispatch = useDispatch()
  dispatch({
    type:"SIGN_IN",
    payload:{login:false,type:-1}
  })
  const accounts=[
  {
    email:'admin@gmail.com',
    username: 'admin',
    password: '123456',
    type: 0
  },
  {
    email: 'user@gmail.com',
    username: 'user',
    password: '123456',
    type:1
  }
  ]
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("")
  const loginHandler=()=>{
    if(email.length===0){
        setError("Enter Email")
    }
    else if(password.length===0){
        setError("Enter Password")
    }
    else{
        let check=true;
        for(let i=0;i<accounts.length;++i){
            if(accounts[i].email===email && accounts[i].password===password){
                dispatch(
                {
                    type:"SIGN_IN",
                    payload:{login:true,type:accounts[i].type}
                })
                dispatch(
                {
                    type:"EMAIL_GET",
                    payload:{email:accounts[i].email,username:accounts[i].username}
                })
            }
        }
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../images/avatar.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>


      <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    height:200,
    width:200,
    borderRadius:200
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});