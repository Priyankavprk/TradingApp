import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons'

import styles from './styles';
import { getTradeData, loadOrderBook } from '../store/actions';
import SearchBar from '../components/searchBar';
import InfoSection from '../components/infoSection';
import OrderBook from '../components/orderBook';

const Home = ({ navigation }) => {
    const currencyData = useSelector(state => state.tradeReducer.data);
    const currencyPair = useSelector(state => state.tradeReducer.currencyPair);
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
                    <TouchableOpacity 
                        style={styles.actionTextConatiner}
                        onPress={() => handleClick()}
                    >
                        <Text style={styles.actionText}>
                            {showTable ? "HIDE ORDER BOOK" : "VIEW ORDER BOOK"}
                        </Text>
                    </TouchableOpacity>
                    {showTable && <OrderBook bids={bids} asks={asks} />}
                    <TouchableOpacity onPress={() => handleRefresh()} style={styles.refreshButton}>
                        <FontAwesomeIcon icon={faSync} color={"#fff"} />
                    </TouchableOpacity>
                </ScrollView>
            </>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View   style={styles.innerContainer}>
                <SearchBar 
                    value={searchText}
                    setSearchText={setSearchText}
                    onSearch={() => dispatch(getTradeData({data: searchText}))}
                />
                {!currencyData && <DefaultView />}
                {currencyData && <DataSection />}
            </View>
        </SafeAreaView>
    );
};

export default Home;
