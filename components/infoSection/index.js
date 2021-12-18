import React from 'react';
import PropTypes from "prop-types";
import {FlatList, Text, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';

import styles from './styles';

const displayNames = {
    "open": "OPEN",
    "high": "HIGH",
    "low": "LOW",
    "last": "LAST",
    "volume": "VOLUME",
}

const InfoSection = (props) => {
    const displayFormat = ["open", "high", "low", "last", "volume"];
    const dateTime = moment.unix(props.data.timestamp).format('DD MMMM, YYYY HH:MM:SS');
    
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

InfoSection.propTypes = {
    data: PropTypes.object,
    title: PropTypes.string,
};

InfoSection.defaultProps = {
    data: {},
};

export default InfoSection;