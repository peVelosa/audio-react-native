import { COLORS } from "@/src/constants";
import styled from "styled-components/native";

export const AudioContainer = styled.View`
  padding: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
  border-color: ${() => COLORS["primary"]};
  border-width: 3px;
  border-radius: 5px;
  gap: 5px;
`;
