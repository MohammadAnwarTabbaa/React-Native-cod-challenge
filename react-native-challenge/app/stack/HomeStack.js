import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import DashBoardScreen from '../screens/DashBoardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-elements';
import { logOut } from '../redux/actions/userAction';
const AuthStack = createNativeStackNavigator();
const DashboardStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = (props) => {
    const user = useSelector((state) => state.login.user);
    const dispatch = useDispatch();
    const LogOutButton = () => (
        <Button
            icon={{
                name: "logout",
                size: 15,
                color: "white"
            }}
            title="Logout"
            onPress={() => dispatch(logOut())}
        />

    )
    const AuthStackScreen = () => (
        <AuthStack.Navigator>
            <AuthStack.Screen name='Login' component={LoginScreen} options={{
                title: 'Login',
                headerTitleAlign: 'center'
            }} />
        </AuthStack.Navigator>
    );

    const DashboardStackScreen = () => (
        <DashboardStack.Navigator>
            <DashboardStack.Screen name='Dashboard' component={DashBoardScreen} options={{ headerRight: () => <LogOutButton /> }} />
        </DashboardStack.Navigator>
    );
    return (
        <NavigationContainer>
            {/* <AuthStack.Navigator> */}
            {!user.accessToken ? (
                <AuthStackScreen />) : <DashboardStackScreen />}
            {/* <AuthStack.Screen name="login" component={LoginScreen} options={{ title: 'Sign In' }} />
                <AuthStack.Screen name="dashBoard" component={DashBoardScreen} /> */}
            {/* </AuthStack.Navigator> */}
        </NavigationContainer>
    );
}

export default HomeStack;