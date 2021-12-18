import React from 'react';
import PropTypes from "prop-types";
import {Text, StyleSheet, View} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

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
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
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

const styles = StyleSheet.create({
    head: { 
        height: 40,
    },
    heading: {
        color: "#000",
        fontSize: 16,
        marginBottom: 5,
    },
    tableContainer: {
        elevation: 1,
        borderRadius: 3,
        shadowColor: "grey",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
    },
    tableStyle: {
        padding: 5,
    },
    text: { 
        textAlign: "center"
    }
});

export default OrderBook;