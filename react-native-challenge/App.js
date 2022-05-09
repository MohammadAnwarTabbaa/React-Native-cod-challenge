import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import LoginScreen from './app/screens/LoginScreen';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import HomeStack from './app/stack/HomeStack';


export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    // <View style={{
    //   backgroundColor: "red",
    //   width: "100%",
    //   height: landscape ? "100%" : "50%"
    // }}>
    //   <Text onPress={() => console.log("you pressed")}>hello</Text>
    //   <Image fadeDuration={5000} source={require('./assets/favicon.png')} />
    //   <StatusBar style="auto" />
    // </View>

    // <View style={{
    //   backgroundColor: "white",
    //   flex: 1,
    // }}>
    //   <View style={{
    //     backgroundColor: "tomato",
    //     flex: 1
    //   }} />
    //   <View style={{
    //     backgroundColor: "blue",
    //     flex: 1
    //   }} />
    //   <View style={{
    //     backgroundColor: "gold",
    //     flex: 1
    //   }} />


    // </View>
    <Provider store={store}>
      <HomeStack>

      </HomeStack>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
});
