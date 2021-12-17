import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const OrderBook = () => {
    const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    const tableData = [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456789'],
        ['a', 'b', 'c', 'd']
      ];
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