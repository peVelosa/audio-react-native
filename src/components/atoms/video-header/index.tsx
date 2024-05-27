import { Pressable, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAudio } from "@/hooks/use-audio";
import { Typography } from "@/styles/typography";
import { COLORS } from "@/src/constants";
import * as S from "./styles";

type VideoHeaderProps = {
  name: string;
  src: string;
  description?: string;
};

const VideoHeader = ({ name, src, description }: VideoHeaderProps) => {
  const { getAudio, handlePlay } = useAudio();
  const props = getAudio({
    name,
    src,
  });

  if (!props) return null;

  const { error, durationAsString, isPlaying, isLoaded } = props;

  if (error) return null;

  const handlePress = async () => await handlePlay({ name, src });

  return (
    <>
      {isLoaded ? (
        <>
          <S.Wrapper>
            <Pressable
              onPress={handlePress}
              disabled={!isLoaded}
              hitSlop={5}
            >
              <FontAwesome5
                name={isPlaying ? "pause" : "play"}
                size={20}
                color={COLORS["green"]}
              />
            </Pressable>
            <View>
              <Typography $color="gray">{name}</Typography>
              <Typography $color="gray">{durationAsString}</Typography>
            </View>
          </S.Wrapper>
          {description && (
            <View>
              <Typography $color="gray">{description}</Typography>
            </View>
          )}
        </>
      ) : (
        <Typography $color="gray">Carregando...</Typography>
      )}
    </>
  );
};

export default VideoHeader;
