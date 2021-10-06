import React, { useState } from "react";
import { ContainerLogin, InputTextLabel, InputTextValue } from "./styles";

export const InputLogin = ({
  placeholder,
  label,
  onChangeText,
  secureTextEntry,
  keyboardType,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  return (
    <ContainerLogin focus={focus}>
      <InputTextLabel>{label}</InputTextLabel>
      <InputTextValue
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={(text) => onChangeText(text)}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </ContainerLogin>
  );
};
