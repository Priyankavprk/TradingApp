import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import { Colors } from 'react-native/Libraries/NewAppScreen';

import SearchBar from '../components/searchBar';

const Home = ({ navigation }) => {
  const count = useSelector(state => state.tradeReducer.counter);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{alignItems: "center"}}
        style={styles.innerContainer}>
        <View
          style={{
            width: "100%"
          }}>
            <SearchBar />
            <Text>{count}</Text>
            <Button
              title="Testd Click"
              onPress={() =>
                navigation.navigate('testScreen', { value: 'data' })
              }
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    innerContainer: {
        marginHorizontal: 15,
        marginVertical: 20,
    }
});

export default Home;
