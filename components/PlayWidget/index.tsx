import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const songs = {
  imageUri: "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
  title: "Hello from the other side",
  artist: "Helen",
};
const PlayWidget = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: songs.imageUri }} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Ashley Barnes</Text>
          <Text style={styles.title}>Bacchus</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={30} color="white" />
          <FontAwesome5 size={30} name="play" color="white" />
        </View>
      </View>
    </View>
  );
};

export default PlayWidget;
