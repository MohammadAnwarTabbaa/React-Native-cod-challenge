import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native';
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
        <View>
            <TextInput name="username" placeholder="userName" onChangeText={(e) => setUserName(e)} ></TextInput>
            <TextInput name="password" placeholder="Password" onChangeText={(e) => setPassword(e)} ></TextInput>
            <Button title='login' onPress={handleLogIn} />
        </View>
    );
}
