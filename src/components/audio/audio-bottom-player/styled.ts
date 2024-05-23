import { COLORS } from "@/src/constants";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${() => COLORS["gray"]};
`;
