import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons'

import { getTradeData } from '../store/actions';
import SearchBar from '../components/searchBar';
import InfoSection from '../components/infoSection';
import OrderBook from '../components/orderBook';

const DefaultView = () => {
    return (
        <View style={styles.defaultViewContainer}>
            <Image style={styles.imageStyle} source={require('./searchIcon.png')} />
            <Text>Enter a currency pair to load data</Text>
        </View>
    );
};

const DataSection = () => {
    const dispatch = useDispatch();
    return (
        <>
            <InfoSection />
            <TouchableOpacity style={styles.actionTextConatiner} onPress={() => dispatch(getTradeData())}>
                <Text style={styles.actionText}>VIEW ORDER BOOK</Text>
            </TouchableOpacity>
            <OrderBook />
            <TouchableOpacity onPress={() => console.log("hai")} style={styles.refreshButton} >
                <FontAwesomeIcon icon={ faSync } color={"#fff"} />
            </TouchableOpacity>
        </>
    );
};

const Home = ({ navigation }) => {
  const count = useSelector(state => state.tradeReducer.counter);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{alignItems: "center"}}
        style={styles.innerContainer}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: "100%"
          }}>
            <SearchBar onSearch={(payload) => dispatch(getTradeData(payload))} />
            <DefaultView />
            <DataSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    actionText: {
        color: "#811bf7",
        fontWeight: "bold",
    },
    actionTextConatiner: {
        alignSelf: "flex-end",
    },
    container: {
        display: "flex",
        flex: 1,
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
    },
    refreshButton: {
        height: 50,
        width: 50,
        alignSelf: "flex-end",
        borderRadius: 25,
        backgroundColor: "#6e00f7",
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        marginTop: 10,
    }
});

export default Home;
