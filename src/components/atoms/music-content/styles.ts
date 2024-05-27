import { FlatList as RFlatList } from "react-native";
import { COLORS } from "@/src/constants";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  height: 100px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Pressable = styled.Pressable`
  width: 100%;
  padding: 10px;
  border-width: 2px;
  border-color: ${() => COLORS["white"]};
  margin-bottom: 10px;
`;

export const View = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const FlatList = styled.FlatList`
  padding: 10px;
` as unknown as typeof RFlatList;
