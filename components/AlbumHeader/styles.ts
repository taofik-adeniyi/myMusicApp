import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: 170,
        height: 170,
        margin: 20
    },
    name: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    creator: {
        color: 'lightgray',
        margin: 5,
        fontSize: 16
    },
    likes: {
        color: 'lightgray',
        margin: 5,
        fontSize: 16
    },
    creatorContainer: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#1cd05d',
        height: 45,
        marginTop: 10,
        width: 130,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'lightgray',
        fontWeight: 'bold',
        fontSize: 20
    }
})


export default styles