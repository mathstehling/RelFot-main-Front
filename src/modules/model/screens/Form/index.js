import React from "react";
import {
  BaseView,
  SubTitle,
  PickerContract,
  PickerRegional,
  PickerEqp,
  PickerDate,
  LargeButton,
} from "../../../../components";
import logo from "../../../../assets/img/GCT.png";
import { Image } from "./styles";
import {
  useContractStore,
  useEquipmentStore,
  useDateStore,
  useRegionalStore,
} from "../../../../services";

export const FormScreen = ({ navigation }) => {
  return (
    <BaseView ml={24} mt={60}>
      <Image source={logo} />
      <SubTitle mt={40} mb={16}>
        Selecione uma regional:
      </SubTitle>
      <PickerRegional />
      <SubTitle mt={32} mb={16}>
        Selecione um contrato:
      </SubTitle>
      <PickerContract />
      <SubTitle mt={32} mb={16}>
        Selecione um equipamento:
      </SubTitle>
      <PickerEqp />
      <SubTitle mt={32} mb={16}>
        Selecione o periodo:
      </SubTitle>
      <PickerDate />
      <BaseView fullWidth mt={150} mr={24} ml={8}>
        <LargeButton
          children={"Inserir Imagens"}
          onPress={() => navigation.navigate("ImageSignaling")}
        />
      </BaseView>
    </BaseView>
  );
};
