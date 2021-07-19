import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native'
import styles from "./styles";

import { Album } from "../../types";
import AlbumCategory from "../AlbumCategory";
export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => {
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('AlbumScreen', {id: props.album.id})
  }
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.album.imageUri }} />
      <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumComponent;
