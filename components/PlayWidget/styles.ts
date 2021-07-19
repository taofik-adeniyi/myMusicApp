import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 84,
        backgroundColor: '#131313',
        width: 'auto',
        left: 10,
        right: 10
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        padding: 10
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
    },
    name: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 12,
        paddingLeft: 10,
        color: 'lightgray',
    },
    dot: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    image: {
        width: 75,
        height: 75
    }
})

export default styles