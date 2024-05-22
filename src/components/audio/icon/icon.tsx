import { Fontisto, Entypo } from "@expo/vector-icons";
import { IconContainer } from "./styled";
import { COLORS } from "@/src/constants";
import { AudioProps } from "..";

type IconProps = {
  type: NonNullable<AudioProps["type"]>;
};

const Icon = ({ type }: IconProps) => {
  return (
    <IconContainer>
      {type === "podcast" ? (
        <Fontisto
          name="podcast"
          size={40}
          color={COLORS["primary"]}
        />
      ) : (
        <Entypo
          name="book"
          size={40}
          color={COLORS["primary"]}
        />
      )}
    </IconContainer>
  );
};

export default Icon;
