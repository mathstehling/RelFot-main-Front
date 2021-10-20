import React from "react";
import {
  BaseView,
  InsertImageR19,
  InsertImageFEV,
  InsertImageCOMB,
  SubTitle,
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

export const ImageSignalingScreen = ({ navigation }) => {
  const { regionalStore } = useRegionalStore();
  const { contractStore } = useContractStore();
  const { equipmentStore } = useEquipmentStore();
  const { dateStore } = useDateStore();

  console.log(regionalStore);
  console.log(contractStore);
  console.log(equipmentStore);
  console.log(dateStore);

  return (
    <BaseView ml={24} mt={60}>
      <Image source={logo} />
      <SubTitle mt={16} mb={16}>
        Insira as imagens de sinalização:
      </SubTitle>
      <InsertImageR19 onPress={() => navigation.navigate("Camera")} />
      <BaseView mt={16} mb={16}>
        <InsertImageFEV onPress={() => navigation.navigate("Camera")} />
      </BaseView>
      <InsertImageR19 onPress={() => navigation.navigate("Camera")} />
      <BaseView mt={16} mb={140}>
        <InsertImageCOMB onPress={() => navigation.navigate("Camera")} />
      </BaseView>
      <LargeButton
        children={"Proximo"}
        onPress={() => navigation.navigate("ImageEQP")}
      />
    </BaseView>
  );
};
