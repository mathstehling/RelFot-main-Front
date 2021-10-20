import React, { useState, useEffect } from "react";
import { Platform, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect, { defaultSyles } from "react-native-picker-select";
import { PickerContainer } from "./styles";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";
import {
  useContractStore,
  useRegionalStore,
  useEquipmentStore,
} from "../../../services";

export const PickerEqp = () => {
  const [equipment, setEquipment] = useState([]);

  const { regionalStore } = useRegionalStore();
  const { contractStore } = useContractStore();
  const { setEquipmentStore } = useEquipmentStore();

  /*  const userId = userAuth.id; */
  /*  console.log(regionalStore);
  console.log(contractStore); */

  const placeholder = {
    label: "Selecione o equipamento",
    value: null,
    color: "black",
  };

  useEffect(() => {
    axios
      .get(
        "http://192.168.1.151:8584/regional/" +
          regionalStore +
          "/" +
          contractStore +
          "/equipments"
      )
      .then((response) => {
        setEquipment(
          response.data.map((response) => ({
            label: response.number_equipment + " - " + response.way,
            key: response.number_equipment + " - " + response.way,
            value: [response],
          }))
        );
      });
  }, [regionalStore, contractStore]);

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
      onValueChange={(value) => setEquipmentStore(value)}
      items={equipment}
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
