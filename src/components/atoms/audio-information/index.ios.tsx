import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Typography } from "@/styles/typography";
import { COLORS } from "@/src/constants";
import { convertTimeFromMillisToSeconds } from "@/src/utils";
import * as S from "./styles";
import { type Audio } from "@/src/contexts/audio";

type AudioInformationProps = {
  currentAudio: Audio;
  isPlaying: boolean;
  handlePlay: () => Promise<void>;
  handleClose: () => void;
};

const AudioInformation = ({
  handlePlay,
  isPlaying,
  currentAudio,
  handleClose,
}: AudioInformationProps) => {
  const currentTime = convertTimeFromMillisToSeconds(
    currentAudio.currentMillis,
    currentAudio.durationInMillis
  );

  return (
    <S.Wrapper $platform="ios">
      <Pressable onPress={() => handlePlay()}>
        <FontAwesome
          name={isPlaying ? "pause" : "play"}
          color={COLORS["green"]}
          size={20}
        />
      </Pressable>
      <Typography>{currentTime}</Typography>
      <Typography>{currentAudio.name}</Typography>
      <S.CloseButton onPress={handleClose}>
        <FontAwesome
          name="close"
          color={COLORS["white"]}
          size={24}
          style={{ marginLeft: "auto" }}
        />
      </S.CloseButton>
    </S.Wrapper>
  );
};

export default AudioInformation;
