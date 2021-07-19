import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10
    },
    image: {
        width: 60,
        height: 60
    },
    rightContainer: {
        justifyContent: 'center',
        marginLeft: 15,
    },
    title: {
        color: 'white',
        fontSize: 16
    },
    artist: {
        color: 'lightgray',
        fontSize: 14,
        paddingTop: 5
    },
})

export default styles