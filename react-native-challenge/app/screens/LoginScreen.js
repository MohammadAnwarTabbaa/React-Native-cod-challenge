import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/userAction';


export default function LoginScreen({ navigation }) {
    const [userName, setUserName] = useState([]);
    const [password, setPassword] = useState([]);
    const dispatch = useDispatch();
    const handleLogIn = () => {
        console.log(userName);
        console.log(password);

        dispatch(loginUser(userName, password, navigation));
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput name="username" placeholder="User name" style={styles.TextInput} onChangeText={(e) => setUserName(e)} ></TextInput>
            </View>
            <View style={styles.inputView}>
                <TextInput name="password" placeholder="Password" style={styles.TextInput} onChangeText={(e) => setPassword(e)} ></TextInput>
            </View>
            {/* <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogIn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            {/* <Button style={styles.loginBtn} title='login' onPress={handleLogIn} /> */}
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
        marginBottom: 40

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
    loginBtn:
    {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    }

});

