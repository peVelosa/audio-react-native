import { COLORS } from "@/src/constants";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const ContentWrapper = styled.View`
  width: 100%;
  position: relative;
`;

export const PlayerWrapper = styled.View`
  height: 100px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const PlayerPressable = styled.Pressable`
  width: 100%;
  padding: 10px;
  border-width: 2px;
  border-color: ${() => COLORS["white"]};
  margin-bottom: 10px;
`;

export const PlayerView = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const PlayerList = styled.FlatList`
  padding: 10px;
` as unknown as typeof FlatList;
