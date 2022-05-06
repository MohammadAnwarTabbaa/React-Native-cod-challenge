import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import DashBoardScreen from '../screens/DashBoardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const AuthStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = (props) => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen name="login" component={LoginScreen} options={{ title: 'Sign In' }} />
                <AuthStack.Screen name="dashBoard" component={DashBoardScreen} />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}

export default HomeStack;