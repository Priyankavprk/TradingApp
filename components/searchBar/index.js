import React from 'react';
import {TextInput, TouchableOpacity, StyleSheet, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <TextInput placeholder='Enter currency pair' style={styles.searchText} />
            <TouchableOpacity onPress={() => console.log("hai")} style={styles.searchButton} >
                <FontAwesomeIcon icon={ faSearch } />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    searchButton: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 12,
    },
    searchContainer: {
        display: "flex",
        height: 50,
        backgroundColor: "#d3d3db",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 5,
    },  
    searchText: {
        backgroundColor: "#d3d3db",
        color: "#000",
        padding: 10,
        width: "90%",
    },
});

export default SearchBar;