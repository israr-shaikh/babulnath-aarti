import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import imageList from "../assets/aarti/image";
const { height, width } = Dimensions.get("window");

export default function SwiperComponent() {
  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      showsButtons={true}
      showsPagination={false}
    >
      {imageList.map((img, key) => (
        <View key={key}>
          <Image
            source={img.url}
            style={{
              height: height,
              width: width,
              resizeMode: "contain",
            }}
          />
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: { backgroundColor: "black", marginTop: 0 },
});
