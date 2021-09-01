import React from "react";
import { BaseTouch } from "../Container";
import { TextButton } from "../Text";

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
