import React from 'react';
import PropTypes from "prop-types";
import {Keyboard, TextInput, TouchableOpacity, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './styles';

const SearchBar = (props) => {
    return (
        <View style={styles.searchContainer}>
            <TextInput 
                value={props.value}
                onChangeText={value => props.setSearchText(value.toLowerCase())}
                placeholder='Enter currency pair'
                style={styles.searchText}
            />
            <TouchableOpacity
                onPress={() => {
                    Keyboard.dismiss();
                    props.onSearch()
                }}
                style={styles.searchButton}
            >
                <FontAwesomeIcon icon={ faSearch } />
            </TouchableOpacity>
        </View>
    );
};

SearchBar.propTypes = {
    value: PropTypes.string,
    setSearchText: PropTypes.func,
    onSearch: PropTypes.func,
};

export default SearchBar;