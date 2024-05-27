import { Fontisto, Entypo } from "@expo/vector-icons";
import { COLORS } from "@/src/constants";
import { AudioProps } from "@/organisms/audio";
import * as S from "./styles";

type IconProps = {
  type: NonNullable<AudioProps["type"]>;
};

const Icon = ({ type }: IconProps) => {
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
};

export default Icon;
