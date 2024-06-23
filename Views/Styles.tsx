import { StyleSheet, Dimensions, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FCEEE2',
    },
    flatList: {
        width: '95%',
    },
    text: {
        fontSize: 22
    },
    title: {
        fontSize: 20,
        color: '#000',
        marginStart: 20
    },
    card: {
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 10,
        padding: 20,
        marginTop: 20
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        maxWidth: '95%',
        fontSize: 20,
        minHeight: 56
    },
    button: {
        backgroundColor: Platform.OS === 'android' ? '#000' : '#5a5fcf',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '95%',
        maxHeight: 56,
        height: 56,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    responseContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    responseText: {
        marginBottom: 20,
        textAlign: 'left',
        paddingHorizontal: 10,
    },
    errorText: {
        color: 'red',
        marginTop: 20,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    buttonDisabled: {
        backgroundColor: 'gray',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        gap: 30
    },
});