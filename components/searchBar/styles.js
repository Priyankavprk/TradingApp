import { StyleSheet } from 'react-native';

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
export default styles;

