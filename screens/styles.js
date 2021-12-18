import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    actionText: {
        color: "#811bf7",
        fontWeight: "bold",
    },
    actionTextConatiner: {
        alignSelf: "flex-end",
    },
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        backgroundColor: "#f6f6f6",
    },
    defaultViewContainer: {
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    imageStyle: {
        height: 150,
        width: 150,
        marginVertical: 15,
    },
    innerContainer: {
        marginVertical: 20,
        width: "90%"
    },
    refreshButton: {
        height: 50,
        width: 50,
        alignSelf: "flex-end",
        borderRadius: 25,
        backgroundColor: "#6e00f7",
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        marginTop: 10,
    }
});

export default styles;