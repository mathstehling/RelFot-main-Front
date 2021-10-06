import React, { useState, useEffect } from "react";
import { Platform, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect, { defaultSyles } from "react-native-picker-select";
import { PickerContainer } from "./styles";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";
import { useRegionalStore, useUserStore } from "../../../services";

export const PickerRegional = () => {
  const [regional, setRegional] = useState([]);
  const [regionalSelecionado2, setRegionalSelecionado] = useState();
  const { userAuth } = useUserStore();
  const { setRegionalStore } = useRegionalStore();
  const { regionalStore } = useRegionalStore();

  const userId = userAuth.id;
  const placeholder = {
    label: "Selecione a regional",
    value: null,
    color: "black",
  };

  useEffect(() => {
    axios
      .get("http://192.168.10.103:3333/users/" + userId + "/regional")
      .then((response) => {
        setRegional(
          response.data.map((response) => ({
            label: response.name_regional,
            key: response.name_regional,
            value: [
              {
                value: response.name_regional,
                id: response.id,
              },
            ],
          }))
        );
        /* console.log(response); */
      });
  }, []);
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
      onValueChange={(value) => {
        if (value === null) {
          return null;
        } else {
          const idRegional = value.map((item) => item.id);
          setRegionalStore(idRegional[0]);
        }
      }}
      items={regional}
      Icon={() => {
        return <Entypo name="chevron-small-down" size={22} color="black" />;
      }}
    />
  );
};

/* export const PickerLote = () => {
  const [lote] = useState(["Lote 06", "Lote 07", "Lote 14", "Lote 22"]);
  const [loteSelecionado, setLoteSelecionado] = useState([]);
  return (
    <PickerContainer>
      <Picker
        style={{ bottom: 9 }}
        selectedValue={loteSelecionado}
        onValueChange={(itemValue) => setLoteSelecionado(itemValue)}
      >
        {lote.map((item) => {
          return <Picker.Item label={item} value={item} />;
        })}
      </Picker>
    </PickerContainer>
  );
};

 export const PickerRegional = () => {
  const [regional] = useState(["Regional Bahia Sul", "Regional Bahia Norte"]);
  const [regionalSelecionado, setRegionalSelecionado] = useState([]);
  return (
    <PickerContainer>
      <Picker
        style={{ bottom: 9 }}
        selectedValue={regionalSelecionado}
        onValueChange={(itemValue) => setRegionalSelecionado(itemValue)}
      >
        {regional.map((item) => {
          return <Picker.Item label={item} value={item} />;
        })}
      </Picker>
    </PickerContainer>
  );
}; 

export const PickerEqp = () => {
  const [eqp] = useState(["BRI1206 - SC", "BRI1506 - SD"]);
  const [eqpSelecionado, setEqpSelecionado] = useState([]);
  return (
    <PickerContainer>
      <Picker
        style={{ bottom: 9 }}
        selectedValue={eqpSelecionado}
        onValueChange={(itemValue) => setEqpSelecionado(itemValue)}
      >
        {eqp.map((item) => {
          return <Picker.Item label={item} value={item} />;
        })}
      </Picker>
    </PickerContainer>
  );
};

export const PickerPeriodo = () => {
  const [periodo] = useState([
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]);
  const [periodoSelecionado, setPeriodoSelecionado] = useState([]);
  return (
    <PickerContainer>
      <Picker
        style={{ bottom: 9 }}
        selectedValue={periodoSelecionado}
        onValueChange={(itemValue) => setPeriodoSelecionado(itemValue)}
      >
        {periodo.map((item) => {
          return <Picker.Item label={item} value={item} />;
        })}
      </Picker>
    </PickerContainer>
  );
}; */

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
