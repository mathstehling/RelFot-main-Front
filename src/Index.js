import React from "react";
import { ThemeProvider } from "styled-components";
// import Storybook from "../storybook";
import { theme } from "./styles/theme";
import { Routes } from "./routes";
import { useColorScheme } from "react-native";

export const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};
