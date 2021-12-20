import React, { useState } from 'react';
import PropTypes from "prop-types";
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './styles';

const SearchBar = (props) => {
    const [showError, setShowError] = useState(false);

    const handleClick = () => {
        if(!props.value) {
            setShowError(true);
            return;
        }
        setShowError(false);
        Keyboard.dismiss();
        props.onSearch()
    };

    return (
        <>
            <View style={styles.searchContainer}>
                <TextInput 
                    value={props.value}
                    onChangeText={value => props.setSearchText(value.toLowerCase())}
                    placeholder='Enter currency pair'
                    style={styles.searchText}
                />
                <TouchableOpacity
                    onPress={() => handleClick()}
                    style={styles.searchButton}
                >
                    <FontAwesomeIcon icon={ faSearch } />
                </TouchableOpacity>
            </View>
            {showError && <Text style={styles.errorText}>Please enter a currency pair</Text>}
        </>
    );
};

SearchBar.propTypes = {
    value: PropTypes.string,
    setSearchText: PropTypes.func,
    onSearch: PropTypes.func,
};

export default SearchBar;