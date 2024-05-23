import { Pressable, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAudio } from "@/src/hooks/use-audio";
import { Typography } from "@/components/ui/typography";
import { COLORS } from "@/src/constants";

type VideoHeaderProps = {
  name: string;
  src: string;
};

const VideoHeader = ({ name, src }: VideoHeaderProps) => {
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
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        {isLoaded ? (
          <>
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
          </>
        ) : (
          <Typography $color="gray">Carregando...</Typography>
        )}
      </View>
    </>
  );
};

export default VideoHeader;
