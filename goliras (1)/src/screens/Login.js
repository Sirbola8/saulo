import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Image
          source={require("../assets/images/1128db63f0813c095338617696c36ed01.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.loremIpsum}>ENCONTRE SEU PAR ROMANTICO</Text>
        <View style={styles.rect2}>
          <View style={styles.iconRow}>
            <OcticonsIcon name="person" style={styles.icon}></OcticonsIcon>
            <Text style={styles.nomeDeUsuario1}>NOME DE USUÁRIO/E-MAIL</Text>
          </View>
        </View>
        <View style={styles.rect3}>
          <View style={styles.icon3Row}>
            <FontAwesomeIcon name="lock" style={styles.icon3}></FontAwesomeIcon>
            <Text style={styles.senha}>SENHA</Text>
          </View>
        </View>
        <Text style={styles.esqueceuASenha}>esqueceu a senha?</Text>
        <Text style={styles.fAQ}>F.A.Q.</Text>
        <View style={styles.icon5Row}>
          <FontAwesomeIcon
            name="align-justify"
            style={styles.icon5}
          ></FontAwesomeIcon>
          <OcticonsIcon name="home" style={styles.icon4}></OcticonsIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,1)"
  },
  rect: {
    width: 360,
    height: 736,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 24
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 19,
    marginLeft: 79
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginTop: 62,
    marginLeft: 73
  },
  rect2: {
    width: 277,
    height: 49,
    backgroundColor: "rgba(131,26,128,1)",
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 41
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 44,
    width: 30
  },
  nomeDeUsuario1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginLeft: 10,
    marginTop: 13
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 53,
    marginLeft: 13,
    marginTop: 3
  },
  rect3: {
    width: 277,
    height: 49,
    backgroundColor: "rgba(131,26,128,1)",
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 41
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 40,
    width: 26
  },
  senha: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginLeft: 75,
    marginTop: 12
  },
  icon3Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 116,
    marginLeft: 15,
    marginTop: 4
  },
  esqueceuASenha: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginTop: 5,
    marginLeft: 120
  },
  fAQ: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 162
  },
  icon5: {
    color: "rgba(131,26,128,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 3
  },
  icon4: {
    color: "rgba(131,26,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginLeft: 106
  },
  icon5Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 213,
    marginLeft: 14,
    marginRight: 160
  }
});

export default Login;
