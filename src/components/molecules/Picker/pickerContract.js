import React, { useState, useEffect } from "react";
import { Platform, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect, { defaultSyles } from "react-native-picker-select";
import { PickerContainer } from "./styles";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";
import { useUserStore, useRegionalStore } from "../../../services";

export const PickerContract = () => {
  const [contract, setContract] = useState([]);
  const { userAuth } = useUserStore();
  const { regionalStore } = useRegionalStore();

  /*  const userId = userAuth.id; */
  console.log(regionalStore);

  const placeholder = {
    label: "Selecione o contrato",
    value: null,
    color: "black",
  };

  useEffect(() => {
    axios
      .get("http://192.168.10.103:3333/regional/" + regionalStore + "/contract")
      .then((response) => {
        setContract(
          response.data.map((response) => ({
            label: response.name_contract,
            key: response.name_contract,
            value: [
              {
                value: response.name_contract,
                id: response.id,
              },
            ],
          }))
        );
      });
  }, [regionalStore]);

  return (
    <RNPickerSelect
      placeholder={placeholder}
      style={{
        ...pickerSelectStyles,

        iconContainer: {
          top: 3,
          right: 28,
        },
      }}
      onValueChange={(value) => console.log(value)}
      items={contract}
      Icon={() => {
        return <Entypo name="chevron-small-down" size={22} color="black" />;
      }}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginTop: 10,
    width: 312,
    height: 28,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "stretch",
    color: "black",
  },
  inputAndroid: {
    height: 28,
    width: 312,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "stretch",
    color: "black",
  },
});
