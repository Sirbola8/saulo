import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Configuracoesdoidioma(props) {
  return (
    <View style={styles.container}>
      <Icon name="gears" style={styles.icon}></Icon>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>CONFIGURAÇÕES DE IDIOMA</Text>
        <Image
          source={require("../assets/images/Ra06f16aaf0023ecd5ec7256f26ef3527.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/R47f1c5c3f699ecff66f5a3acfb99e94a.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.portugues}>Português</Text>
        <Text style={styles.espanhol}>Espanhol</Text>
      </View>
      <View style={styles.image3Row}>
        <Image
          source={require("../assets/images/607-6074434_flag-of-the-united-states-of-america-usa2.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <Text style={styles.ingles}>Inglês</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    color: "rgba(131,26,128,1)",
    fontSize: 154,
    marginTop: 57,
    alignSelf: "center"
  },
  loremIpsum: {
    top: 0,
    left: 39,
    position: "absolute",
    fontFamily: "georgia-regular",
    color: "rgba(131,26,128,1)",
    fontSize: 21
  },
  image: {
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image2: {
    top: 154,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  portugues: {
    top: 83,
    left: 182,
    position: "absolute",
    fontFamily: "georgia-regular",
    color: "#121212",
    fontSize: 34
  },
  espanhol: {
    top: 254,
    left: 186,
    position: "absolute",
    fontFamily: "georgia-regular",
    color: "#121212",
    fontSize: 34
  },
  loremIpsumStack: {
    width: 340,
    height: 354,
    marginTop: 28,
    marginLeft: -10
  },
  image3: {
    width: 151,
    height: 150,
    marginLeft: -1
  },
  ingles: {
    fontFamily: "georgia-regular",
    color: "#121212",
    fontSize: 34,
    marginLeft: 18,
    marginTop: 65
  },
  image3Row: {
    height: 150,
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 85
  }
});

export default Configuracoesdoidioma;
