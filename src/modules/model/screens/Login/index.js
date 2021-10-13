import React, { useState } from "react";
import { Text } from "react-native";
import {
  BaseView,
  Title,
  InputLogin,
  LargeButton,
  Error,
} from "../../../../components";
import logo from "../../../../assets/img/GCT.png";
import { Image } from "./styles";
import { useUserStore, useRegionalStore } from "../../../../services";

export const LoginScreen = ({ navigation }) => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const { setUserAuth } = useUserStore();
  const { setRegionalStore } = useRegionalStore();

  async function sendForm() {
    let response = await fetch("http://192.168.1.151:8584/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        password: password,
      }),
    });
    let json = await response.json();
    if (json === "error") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    } else {
      setUserAuth(json);
      navigation.navigate("Form");
    }
  }

  return (
    <BaseView>
      <Image source={logo} />
      <Title mt={92} ml={24}>
        Relatório Fotográfico
      </Title>
      <InputLogin
        label={"Usuário"}
        placeholder={"contato@gctnet.com.br"}
        onChangeText={setUser}
        keyboardType={"email-address"}
        secureTextEntry={false}
      />
      <InputLogin
        label={"Senha"}
        placeholder={"***************"}
        onChangeText={setPassword}
        keyboardType={"default"}
        secureTextEntry={true}
      />
      <Error ml={24} mt={24} align={"center"} error={error}>
        Usuário e/ou senha incorretos
      </Error>
      <BaseView align="center" mt={180} fullWidth>
        <LargeButton
          children={"Login"}
          onPress={
            () => sendForm()

            //navigation.navigate("Form")
          }
        />
      </BaseView>
    </BaseView>
  );
};
