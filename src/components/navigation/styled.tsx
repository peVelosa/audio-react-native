import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "@/constants";

export const Wrapper = styled.View`
  background-color: ${() => COLORS["gray"]};
  margin-top: ${() =>
    Platform.OS === "android" ? `${StatusBar.currentHeight}px` : "0px"};
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
