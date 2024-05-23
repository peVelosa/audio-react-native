import { COLORS } from "@/src/constants";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
  gap: 20px;
  bottom: 0;
  width: 100%;
  background-color: ${() => COLORS["gray"]};
  padding: 15px;
`;
