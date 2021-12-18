import React from 'react';
import PropTypes from "prop-types";
import {Text, View} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import styles from './styles';

const OrderBook = (props) => {
    const tableHead = ['BID PRICE', 'QTY', 'QTY', 'ASK PRICE']; 
    const tableData = props.bids.map((item, index) => {
        if (props.asks[index]) {
            return [...item, ...props.asks[index]];
        }
        return [...item, 0, 0];
    });
    
    return (
        <>
            <Text style={styles.heading}>ORDER BOOK</Text>
            <View style={styles.tableContainer}>
            <Table style={styles.tableStyle}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.headText}/>
                    <Rows data={tableData} textStyle={styles.text}/>
            </Table>
            </View>
        </>
    );
};

OrderBook.propTypes = {
    bids: PropTypes.array,
    asks: PropTypes.array,
};

OrderBook.defaultProps = {
    bids: [],
    asks: [],
};

export default OrderBook;