import { FontAwesome } from "@expo/vector-icons";
import { Typography } from "@/styles/typography";
import { useAudio } from "@/hooks/use-audio";
import { useGlobal } from "@/hooks/use-global";
import { COLORS } from "@/src/constants";
import { useTab } from "@/organisms/tab";
import { type Audio } from "@/src/contexts/audio";
import * as S from "./styles";

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
    <S.Wrapper>
      <S.FlatList
        data={audios}
        renderItem={({ item: audio }) => (
          <>
            <S.Pressable
              onPress={() =>
                handlePress({
                  name: audio.name,
                  src: audio.src,
                  containerOffSetHeight: audio.containerOffSetHeight,
                })
              }
            >
              <S.View>
                <FontAwesome
                  name={audio.isPlaying ? "pause" : "play"}
                  size={18}
                  color={COLORS["green"]}
                />
                <Typography>{audio.durationAsString}</Typography>
                <Typography>{audio.name}</Typography>
              </S.View>
            </S.Pressable>
          </>
        )}
      />
    </S.Wrapper>
  );
};

export default MusicContent;
