import { StyleSheet } from 'react-native';

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

export default styles;

