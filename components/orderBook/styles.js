import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    head: { 
        height: 40,
    },
    headText: {
        textAlign: "center",
        fontSize: 11,
        color: "#000",
        fontWeight: "bold",
    },
    heading: {
        color: "#000",
        fontSize: 16,
        marginBottom: 5,
    },
    tableContainer: {
        elevation: 1,
        borderRadius: 3,
        backgroundColor: "#fff",
        borderWidth: 0.3,
        borderColor: "#fff",
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
        textAlign: "center",
        fontSize: 10,
    }
});

export default styles;

