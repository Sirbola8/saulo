import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

function Fotos(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconStack}>
        <MaterialIconsIcon
          name="photo-size-select-actual"
          style={styles.icon}
        ></MaterialIconsIcon>
        <Text style={styles.galeriaDeFotos}>GALERIA DE FOTOS</Text>
        <EntypoIcon name="chevron-small-down" style={styles.icon2}></EntypoIcon>
        <EntypoIcon name="chevron-thin-down" style={styles.icon3}></EntypoIcon>
        <IoniconsIcon name="md-square" style={styles.icon4}></IoniconsIcon>
        <IoniconsIcon name="md-square" style={styles.icon5}></IoniconsIcon>
        <Image
          source={require("../assets/images/14188257_330620763994820_1952014847460829296_o.jpg")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <IoniconsIcon name="md-square" style={styles.icon6}></IoniconsIcon>
        <Image
          source={require("../assets/images/67248804_1031363797253843_6463456409274023936_n.jpg")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <FeatherIcon name="plus" style={styles.icon8}></FeatherIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    top: 0,
    left: 67,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 200
  },
  galeriaDeFotos: {
    top: 192,
    left: 0,
    position: "absolute",
    fontFamily: "georgia-regular",
    color: "rgba(121,70,119,1)",
    fontSize: 35
  },
  icon2: {
    top: 172,
    left: 98,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 138
  },
  icon3: {
    top: 194,
    left: 98,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 138
  },
  icon4: {
    top: 293,
    left: 83,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 200
  },
  icon5: {
    top: 455,
    left: 83,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 200
  },
  image2: {
    top: 493,
    left: 94,
    width: 129,
    height: 142,
    position: "absolute"
  },
  icon6: {
    top: 635,
    left: 83,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 200
  },
  image3: {
    top: 673,
    left: 103,
    width: 110,
    height: 123,
    position: "absolute"
  },
  icon8: {
    top: 331,
    left: 87,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 143
  },
  iconStack: {
    width: 335,
    height: 853,
    marginTop: 36,
    marginLeft: 13
  }
});

export default Fotos;
