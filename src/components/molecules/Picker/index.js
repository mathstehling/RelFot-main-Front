import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { PickerContainer } from "./styles";
import axios from "axios";

export const PickerContrato = () => {
  const [contrato, setContrato] = useState([]);
  const [contratoSelecionado, setContratoSelecionado] = useState([]);
  const placeholder = {
    label: "Selecione o contrato",
    value: null,
    color: "black",
  };
  const teste = ["oi"];
  useEffect(() => {
    axios.get("http://192.168.1.151:3030").then((response) => {
      setContrato(
        response.data.map((Contrato) => ({
          label: Contrato.cont,
          key: Contrato.cont,
          value: Contrato.cont,
        }))
      );
    });
  }, []);
  console.log(contrato);
  return (
    <PickerContainer>
      <Picker
        style={{ bottom: 9 }}
        placeholder={{ label: "ok", color: "black" }}
        onValueChange={(itemValue) => setContratoSelecionado(itemValue)}
      >
        {teste.map((item) => {
          return <Picker.Item label={item} value={item} />;
        })}
      </Picker>
    </PickerContainer>
  );
};

export const PickerLote = () => {
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
};
