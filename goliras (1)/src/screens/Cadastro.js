import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Cadastro(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/R0e17c9c95fc0f259f60492edff1b3a5f.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.rect2}>
        <Text style={styles.celular}>CELULAR</Text>
      </View>
      <View style={styles.rect3}>
        <Text style={styles.senha}>SENHA</Text>
      </View>
      <View style={styles.rect5}>
        <Text style={styles.nomeCompleto}>NOME COMPLETO</Text>
      </View>
      <View style={styles.rect4}>
        <Text style={styles.confirmarSenha}>CONFIRMAR SENHA</Text>
      </View>
      <Text style={styles.sejaBemVindo}>SEJA BEM VINDO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 159,
    height: 217,
    marginTop: 163,
    marginLeft: 102
  },
  rect2: {
    width: 306,
    height: 49,
    backgroundColor: "rgba(131,26,128,1)",
    marginTop: 153,
    marginLeft: 25
  },
  celular: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 14,
    marginLeft: 126
  },
  rect3: {
    width: 306,
    height: 49,
    backgroundColor: "rgba(131,26,128,1)",
    marginTop: 16,
    marginLeft: 24
  },
  senha: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 16,
    marginLeft: 133
  },
  rect5: {
    width: 306,
    height: 49,
    backgroundColor: "rgba(131,26,128,1)",
    marginTop: -183,
    marginLeft: 24
  },
  nomeCompleto: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 16,
    marginLeft: 96
  },
  rect4: {
    width: 306,
    height: 49,
    backgroundColor: "rgba(131,26,128,1)",
    marginTop: 151,
    marginLeft: 24
  },
  confirmarSenha: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 16,
    marginLeft: 90
  },
  sejaBemVindo: {
    fontFamily: "charmonman-regular",
    color: "rgba(208,2,27,1)",
    fontSize: 35,
    marginTop: -642,
    marginLeft: 20
  }
});

export default Cadastro;
