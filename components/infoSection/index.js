import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';

const displayNames = {
    "bid": "OPEN",
    "last": "HIGH",
    "vwap": "LOW",
    "ask": "LAST",
    "volume": "VOLUME",
}

const renderItem = (item, data) => {
    return (
        <View style={styles.section}>
            <Text style={styles.subTitle}>{displayNames[item]}</Text>
            <View style={styles.subSection}>
                <FontAwesomeIcon icon={ faDollarSign } />
                <Text style={styles.valueText}>{data[item]}</Text>
            </View>
        </View>
    );
};

const InfoSection = (props) => {
    const displayFormat = ["bid", "last", "vwap", "ask", "volume"];
    const dateTime = moment.unix(props.data.timestamp).format('DD MMMM, YYYY HH:MM:SS');
    return (
        <View>
           <View style={styles.headingSection}>
                <Text numberOfLines={1} style={styles.titleText}>{props.title}</Text>
                <Text style={styles.dateFormat}>{dateTime}</Text>
           </View>
           <FlatList
                data={displayFormat}
                numColumns={2}
                keyExtractor={(item, index) => item+index }
                renderItem={({item}) => renderItem(item, props.data) }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    dateFormat: {
        fontSize: 12,
    },
    headingSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 25,
    },
    section: {
        flexDirection: "column",
        width: "50%",
        marginVertical: 10,
    },
    subSection: {
        flexDirection: "row",
    },
    subTitle: {
        color: "#000",
    },
    titleText: {
        fontSize: 30,
        color: "#000",
        maxWidth: 160,
    },
    valueText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
    }
});

export default InfoSection;