import { COLORS, SIZES } from "@/src/constants";
import styled from "styled-components/native";

type TypographyProps = {
  $color?: keyof typeof COLORS;
  $size?: keyof typeof SIZES;
};

export const Typography = styled.Text<TypographyProps>`
  font-size: ${({ $size }) => ($size ? SIZES[$size] : SIZES["md"])}px;
  color: ${({ $color }) => ($color ? COLORS[$color] : COLORS["white"])};
`;
