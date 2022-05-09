import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { loginUser } from '../redux/actions/userAction';


export default function LoginScreen({ navigation }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState(true);
    const inProgress = useSelector((state) => state.login.inProgress);
    const dispatch = useDispatch();
    const handleLogIn = () => {
        dispatch(loginUser(userName, password, navigation));
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/newspaper.png")} />
            <View style={styles.inputView}>
                <TextInput name="username" placeholder="User name" style={styles.TextInput} onChangeText={(e) => setUserName(e)} ></TextInput>
            </View>
            <View style={styles.inputView}>
                <TextInput name="password" placeholder="Password" style={styles.TextInput} onChangeText={(e) => setPassword(e)} ></TextInput>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogIn} disabled={userName == "" || password == "" || inProgress ? true : false}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            {inProgress ? (<Loading />) : null}
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
        backgroundColor: "#03adfc",
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
        color: 'white'
    },
    loginBtn:
    {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#17b2e6",
    }

});

