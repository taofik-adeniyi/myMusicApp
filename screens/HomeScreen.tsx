import * as React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import AlbumComponent from "../components/AlbumComponent";
import AlbumCategory from "../components/AlbumCategory";
import { albumCategories } from "../data/albumCategories";


const album = {
  id: "1",
  imageUri:
    "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  artistHeadline: "Taylor swift, Cardi b Objective C, Avicii",
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory
            title={item.title}
            albums={item.albums}
            />
            )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
