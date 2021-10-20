import React, { useState } from "react";
import { Button } from "react-native";
import { BaseView, ButtonDate, Title } from "../../../components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDateStore } from "../../../services";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";

export const PickerDate = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateSelected, setDateSelected] = useState("Selecione a data");
  const { setDateStore } = useDateStore();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dateFormat =
      date.getDate() +
      "/" +
      parseInt(date.getMonth() + 1) +
      "/" +
      date.getFullYear();
    setDateSelected(dateFormat);
    setDateStore(dateFormat);
    hideDatePicker();
  };

  /* const addZero = (number) => {
    if (number <= 9) {
      return "0" + number;
    } else {
      return number;
    }
  };

  const dataFormat = () => {
    if (dateSelected === "Selecione a data") {
      return "Selecione a data";
    } else {
      const formatData = Intl.DateTimeFormat("pt-BR", {
        dateStyle: "long",
      });
      data.innerHTML = formatData.format(dateSelected);
      return formatData;
    }
  };
  console.log(dataFormat); */
  return (
    <BaseView>
      <BaseView row>
        <ButtonDate onPress={showDatePicker} children={dateSelected} />
        <Entypo name="chevron-small-down" size={24} color="black" />
      </BaseView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </BaseView>
  );
};
