import { COLORS } from "@/src/constants";
import styled from "styled-components/native";

export const Bar = styled.Pressable`
  width: 100%;
  height: 20px;
  background-color: ${() => COLORS["white"]};
  position: relative;
`;

type ProgressProps = {
  $progress: number;
};

export const Progress = styled.View<ProgressProps>`
  position: absolute;
  width: ${({ $progress }) => $progress}%;
  top: 0;
  bottom: 0;
  background-color: ${() => COLORS["green"]};
`;
