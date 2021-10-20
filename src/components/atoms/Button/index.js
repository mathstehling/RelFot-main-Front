import React from "react";
import { BaseTouch } from "../Container";
import { TextButton, TextButtonDate } from "../Text";

export const LargeButton = ({ onPress, children }) => {
  return (
    <BaseTouch
      width={312}
      height={57}
      br={36}
      bg={"selected"}
      onPress={onPress}
    >
      <TextButton>{children}</TextButton>
    </BaseTouch>
  );
};

export const ButtonDate = ({ onPress, children }) => {
  return (
    <BaseTouch
      align={"flex-start"}
      width={300}
      height={28}
      br={0}
      bg={"primary"}
      onPress={onPress}
    >
      <TextButtonDate ml={7}>{children}</TextButtonDate>
    </BaseTouch>
  );
};
