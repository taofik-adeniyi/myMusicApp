import * as React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import albumDetails from "../data/albumDetails"


import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";

const AlbumScreen = () => {
  const route = useRoute();
  React.useEffect(() => {
    console.log(route);
    return () => {
      // clean up side effects
    };
  }, []);
  
  return (
    <View>
          <FlatList 
          data={albumDetails.songs}
          renderItem={({item})=> (
              <SongListItem song={item} />
          )}
          keyExtractor={(item)=> item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={()=> <AlbumHeader album={albumDetails} />}
        //   vertical
          />
    </View>
  );
};
export default AlbumScreen;
