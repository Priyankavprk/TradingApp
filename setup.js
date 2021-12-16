import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from './App';
import configureStore from './store/configureStore';

const Stack = createNativeStackNavigator();
const {store, persistor} = configureStore();


const TestScreen = ({ navigation, route }) => {
    return <Text>Test: {route.params.value}</Text>;
};

class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <Text>Loading....</Text>
          }
          persistor={persistor}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                    name="Home"
                    component={App}
                    options={{ title: 'Welcome' }}
                    />
                    <Stack.Screen name="testScreen" component={TestScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default Setup;