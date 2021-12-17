import React, { useState } from 'react';
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

import { getTradeData, loadOrderBook } from '../store/actions';
import SearchBar from '../components/searchBar';
import InfoSection from '../components/infoSection';
import OrderBook from '../components/orderBook';

const Home = ({ navigation }) => {
    const currencyData = useSelector(state => state.tradeReducer.data);
    const currencyPair = useSelector(state => state.tradeReducer.currencyPair);
    const orderBook = useSelector(state => state.tradeReducer.orderBook);
    const bids = useSelector(state => state.tradeReducer.bids);
    const asks = useSelector(state => state.tradeReducer.asks);

    const dispatch = useDispatch();

    const handleClick = () => {
        if (!showTable) {
            dispatch(loadOrderBook());
        }
        setTable(!showTable);
    };

    const [showTable, setTable] = useState(false);
    const [searchText, setSearchText] = useState("");

    const DefaultView = () => {
        return (
            <View style={styles.defaultViewContainer}>
                <Image style={styles.imageStyle} source={require('./searchIcon.png')} />
                <Text>Enter a currency pair to load data</Text>
            </View>
        );
    };

    const handleRefresh = () => {
        dispatch({ type: "REFRESH_DATA" });
        setSearchText("");
        setTable(false);
    };

    const DataSection = () => {
        return (
            <>
                <InfoSection data={currencyData} title={currencyPair} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles.actionTextConatiner} onPress={() => handleClick()}>
                        <Text style={styles.actionText}>{showTable ? "HIDE ORDER BOOK" : "VIEW ORDER BOOK"}</Text>
                    </TouchableOpacity>
                    {showTable && <OrderBook data={orderBook} bids={bids} asks={asks} />}
                    <TouchableOpacity onPress={() => handleRefresh()} style={styles.refreshButton} >
                        <FontAwesomeIcon icon={faSync} color={"#fff"} />
                    </TouchableOpacity>
                </ScrollView>
            </>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={styles.innerContainer}
            >
                <SearchBar value={searchText} setSearchText={setSearchText} onSearch={() => dispatch(getTradeData({data: searchText}))} />
                {!currencyData && <DefaultView />}
                {currencyData && <DataSection />}
            </View>
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
        marginVertical: 20,
        width: "90%"
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
