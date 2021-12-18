import { StyleSheet } from 'react-native';

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
        alignItems: "center",
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

export default styles;