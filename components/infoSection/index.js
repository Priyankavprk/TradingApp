import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const renderItem = () => {
    return (
        <View style={styles.section}>
            <Text>NAME</Text>
            <View style={styles.subSection}>
                <FontAwesomeIcon icon={ faDollarSign } />
                <Text>Value</Text>
            </View>
        </View>
    );
};

const InfoSection = () => {
    return (
        <>
           <View style={styles.headingSection}>
                <Text style={styles.titleText}>Title</Text>
                <Text>Timestamp</Text>
           </View>
           <FlatList
                data={[1,2,3,4,5]}
                numColumns={2}
                keyExtractor={(item, index) => index }
                renderItem={(item) => renderItem() }
            />
        </>
    );
};

const styles = StyleSheet.create({
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
    titleText: {
        fontSize: 30,
        color: "#000",
    }
});

export default InfoSection;