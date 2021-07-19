import React from 'react'
import { View, Image,Text } from 'react-native'
import { Song } from '../../types'
import styles from './styles'

export type SongsListItemProps = {
    song: Song
}
const SongListItem = (props: SongsListItemProps) => {
    const {song} = props
    return (
        <View style={styles.container}>
                  <Image style={styles.image} source={{uri: song.imageUri}} />
                  <View style={styles.rightContainer}>
                  <Text style={styles.title}>{song.title}</Text>
                  <Text style={styles.artist}>{song.artist}</Text>
                  </View>
              </View>
    )
}

export default SongListItem
