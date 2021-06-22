import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Faq(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconStack}>
        <FontAwesomeIcon name="question" style={styles.icon}></FontAwesomeIcon>
        <Text style={styles.text}>F.A.Q.</Text>
      </View>
      <View style={styles.icon2Row}>
        <IoniconsIcon
          name="md-radio-button-on"
          style={styles.icon2}
        ></IoniconsIcon>
        <Text style={styles.comoApagarAConta}>COMO APAGAR A CONTA?</Text>
      </View>
      <View style={styles.icon3Row}>
        <IoniconsIcon
          name="md-radio-button-on"
          style={styles.icon3}
        ></IoniconsIcon>
        <Text style={styles.loremIpsum}>COMO MUDAR DE IDIOMA?</Text>
      </View>
      <View style={styles.icon4Row}>
        <IoniconsIcon
          name="md-radio-button-on"
          style={styles.icon4}
        ></IoniconsIcon>
        <Text style={styles.loremIpsum2}>
          É POSSÍVEL SINCRONIZAR A CONTA COM {"\n"}OUTRAS MIDÍAS?
        </Text>
      </View>
      <View style={styles.icon5Row}>
        <IoniconsIcon
          name="md-radio-button-on"
          style={styles.icon5}
        ></IoniconsIcon>
        <Text style={styles.loremIpsum3}>COMO EDITAR MEU PERFIL?</Text>
      </View>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum4}>
          CLIQUE AQUI PARA ENTRAR EM CONTATO DIRETO COM A GENTE VIA E-MAIL
        </Text>
      </View>
      <MaterialCommunityIconsIcon
        name="home"
        style={styles.icon6}
      ></MaterialCommunityIconsIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    top: 0,
    position: "absolute",
    color: "rgba(131,26,128,1)",
    fontSize: 180,
    left: 26
  },
  text: {
    top: 167,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    fontSize: 74
  },
  iconStack: {
    width: 190,
    height: 256,
    marginTop: 54,
    marginLeft: 77
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  comoApagarAConta: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 7,
    marginTop: 13
  },
  icon2Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 26,
    marginRight: 130
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 7,
    marginTop: 13
  },
  icon3Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 26,
    marginRight: 125
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 7,
    marginTop: 10
  },
  icon4Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 26,
    marginRight: 28
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 7,
    marginTop: 13
  },
  icon5Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 26,
    marginRight: 118
  },
  rect: {
    width: 244,
    height: 128,
    backgroundColor: "#E6E6E6",
    marginTop: 60,
    marginLeft: 59
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    height: 93,
    width: 197,
    textDecorationLine: "underline",
    marginTop: 35,
    marginLeft: 23
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: -786,
    marginLeft: -36
  }
});

export default Faq;
