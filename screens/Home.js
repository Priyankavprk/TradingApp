import React from 'react';
import {
  Image,
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

const DefaultView = () => {
    return (
        <View style={styles.defaultViewContainer}>
            <Image style={styles.imageStyle} source={require('./searchIcon.png')} />
            <Text>Enter a currency pair to load data</Text>
        </View>
    );
};

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
            <DefaultView />
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
        backgroundColor: "#f6f6f6",
    },
    defaultViewContainer: {
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    imageStyle: {
        height: 150,
        width: 150,
        marginVertical: 15,
    },
    innerContainer: {
        marginHorizontal: 15,
        marginVertical: 20,
    }
});

export default Home;
