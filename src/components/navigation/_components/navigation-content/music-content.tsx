import { FontAwesome } from "@expo/vector-icons";
import { Typography } from "@/src/components/ui/typography";
import { type Audio } from "@/src/providers/AudioProvider";
import { useAudio } from "@/src/hooks/use-audio";
import { useGlobal } from "@/src/hooks/use-global";
import {
  PlayerWrapper,
  PlayerPressable,
  PlayerView,
  PlayerList,
} from "./styled";
import { COLORS } from "@/src/constants";
import { useTab } from "@/src/components/ui";

const MusicContent = () => {
  const { audios, handlePlay } = useAudio();
  const { scrollViewRef } = useGlobal();
  const { handleSetActive } = useTab();

  const handlePress = ({
    name,
    src,
    containerOffSetHeight,
  }: Pick<Audio, "name" | "src" | "containerOffSetHeight">) => {
    if (!scrollViewRef?.current) return;
    handlePlay({ name, src });
    scrollViewRef.current.scrollTo({
      y: containerOffSetHeight,
      animated: true,
    });
    handleSetActive("");
  };

  return (
    <PlayerWrapper>
      <PlayerList
        data={audios}
        renderItem={({ item: audio }) => (
          <>
            <PlayerPressable
              onPress={() =>
                handlePress({
                  name: audio.name,
                  src: audio.src,
                  containerOffSetHeight: audio.containerOffSetHeight,
                })
              }
            >
              <PlayerView>
                <FontAwesome
                  name={audio.isPlaying ? "pause" : "play"}
                  size={18}
                  color={COLORS["green"]}
                />
                <Typography>{audio.durationAsString}</Typography>
                <Typography>{audio.name}</Typography>
              </PlayerView>
            </PlayerPressable>
          </>
        )}
      />
    </PlayerWrapper>
  );
};

export default MusicContent;
