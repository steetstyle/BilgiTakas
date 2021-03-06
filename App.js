import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "mobx-react";
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import config from "./boot/configureStore";

const Stack = createStackNavigator();
const stores = config();
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
		<Provider {...stores}>
      <View style={styles.container}>
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator screenOptions={{
              headerStyle: {
                height:0
              },
              headerTitleStyle: {
                padding:15,
                marginTop:10
              },
            }}>
            <Stack.Screen name="Root"  component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
	  </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
