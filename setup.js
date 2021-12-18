import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import configureStore from './store/configureStore';

const Stack = createNativeStackNavigator();
const {store, persistor} = configureStore();
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
                      component={Home}
                      options={{ title: 'TradingApp' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default Setup;