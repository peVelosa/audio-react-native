import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Typography } from "@/src/components/ui/typography";
import { COLORS } from "@/src/constants";
import { convertTimeFromMillisToSeconds } from "@/src/utils";
import { CloseButton, Wrapper } from "./styled";
import { type Audio } from "@/modules/audio";

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
    <Wrapper>
      <Pressable onPress={() => handlePlay()}>
        <FontAwesome
          name={isPlaying ? "pause" : "play"}
          color={COLORS["green"]}
          size={20}
        />
      </Pressable>
      <Typography>{currentTime}</Typography>
      <Typography>{currentAudio.name}</Typography>
      <CloseButton onPress={handleClose}>
        <FontAwesome
          name="close"
          color={COLORS["white"]}
          size={20}
          style={{ marginLeft: "auto" }}
        />
      </CloseButton>
    </Wrapper>
  );
};

export default AudioInformation;
