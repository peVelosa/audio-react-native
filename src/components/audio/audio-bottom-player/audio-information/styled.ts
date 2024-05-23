import { COLORS } from "@/src/constants";
import styled from "styled-components/native";

type WrapperProps = {
  $platform?: "ios" | "android";
};

export const Wrapper = styled.View<WrapperProps>`
  flex-direction: row;
  gap: 20px;
  bottom: 0;
  width: 100%;
  background-color: ${() => COLORS["gray"]};
  padding: ${({ $platform }) => ($platform === "ios" ? "20px 25px" : "15px")};
  margin-bottom: ${({ $platform }) => ($platform === "ios" ? "30px" : "0px")};
`;

export const CloseButton = styled.Pressable`
  margin-left: auto;
`;
