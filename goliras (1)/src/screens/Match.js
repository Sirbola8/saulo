import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Match(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStackStack}>
        <View style={styles.imageStack}>
          <Image
            source={require("../assets/images/b137e98b-5f26-453e-9814-3e103e984123.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.rect}>
            <FontAwesomeIcon
              name="align-justify"
              style={styles.icon}
            ></FontAwesomeIcon>
            <OcticonsIcon name="person" style={styles.icon3}></OcticonsIcon>
            <MaterialCommunityIconsIcon
              name="heart-multiple"
              style={styles.icon2}
            ></MaterialCommunityIconsIcon>
            <FontAwesomeIcon
              name="question-circle"
              style={styles.icon5}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              name="gears"
              style={styles.icon10}
            ></FontAwesomeIcon>
          </View>
          <View style={styles.rect2}>
            <View style={styles.loremIpsumStack}>
              <Text style={styles.loremIpsum}></Text>
              <Text style={styles.loremIpsum2}>
                ELX/DELXS/MASCULINXS{"\n"}ES, VILA VELHA{"\n"}
                {"\n"}
                {"\n"}Eu gosto de Garotxs submissxs, caminhar na{"\n"}praia. SOU
                VEGAN E DO ROCK. ERGUEI AS {"\n"}MÃOS AO SENHOR. Estudo
                sociologia na {"\n"} UFES
              </Text>
            </View>
          </View>
        </View>
        <FontAwesomeIcon name="gears" style={styles.icon4}></FontAwesomeIcon>
        <FeatherIcon name="star" style={styles.icon7}></FeatherIcon>
        <SimpleLineIconsIcon
          name="like"
          style={styles.icon8}
        ></SimpleLineIconsIcon>
        <SimpleLineIconsIcon
          name="dislike"
          style={styles.icon9}
        ></SimpleLineIconsIcon>
        <EntypoIcon name="arrow-bold-left" style={styles.icon11}></EntypoIcon>
        <EntypoIcon name="arrow-bold-right" style={styles.icon12}></EntypoIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 0,
    left: 27,
    width: 333,
    height: 381,
    position: "absolute"
  },
  rect: {
    top: 9,
    left: 0,
    width: 75,
    height: 743,
    position: "absolute",
    backgroundColor: "rgba(131,26,128,1)"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    width: 40,
    height: 40,
    marginTop: 18,
    marginLeft: 17
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 45,
    width: 33,
    height: 49,
    marginTop: 17,
    marginLeft: 23
  },
  icon2: {
    color: "rgba(251,248,248,1)",
    fontSize: 40,
    width: 40,
    height: 43,
    marginTop: 20,
    marginLeft: 18
  },
  icon5: {
    color: "rgba(255,254,254,1)",
    fontSize: 45,
    height: 45,
    width: 38,
    marginTop: 16,
    marginLeft: 18
  },
  icon10: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 40,
    width: 42,
    marginTop: 442,
    marginLeft: 16
  },
  rect2: {
    top: 359,
    left: 75,
    width: 285,
    height: 160,
    position: "absolute",
    backgroundColor: "rgba(204,204,204,1)"
  },
  loremIpsum: {
    top: 14,
    left: 10,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsumStack: {
    width: 279,
    height: 136
  },
  imageStack: {
    top: 0,
    left: 0,
    width: 360,
    height: 752,
    position: "absolute"
  },
  icon4: {
    top: 679,
    left: 14,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon7: {
    top: 519,
    left: 195,
    position: "absolute",
    color: "rgba(131,26,128,1)",
    fontSize: 40
  },
  icon8: {
    top: 516,
    left: 85,
    position: "absolute",
    color: "rgba(131,26,128,1)",
    fontSize: 40
  },
  icon9: {
    top: 519,
    left: 303,
    position: "absolute",
    color: "rgba(131,26,128,1)",
    fontSize: 40
  },
  icon11: {
    top: 610,
    position: "absolute",
    color: "rgba(131,26,128,1)",
    fontSize: 81,
    left: 121
  },
  icon12: {
    top: 610,
    left: 222,
    position: "absolute",
    color: "rgba(131,26,128,1)",
    fontSize: 81
  },
  imageStackStack: {
    width: 360,
    height: 752,
    marginTop: 8
  }
});

export default Match;
