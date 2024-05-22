import { useRef, useState } from "react";
import { Pressable, View } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { FontAwesome5 } from "@expo/vector-icons";
import { AudioContainer } from "./styled";
import { Typography } from "@/components/ui/typography";
import { COLORS } from "@/src/constants";
import Icon from "./icon/icon";

export type AudioProps = {
  src: string;
  name: string;
  description?: string;
  type?: "podcast" | "book";
};

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" as const;

const Audio = ({ src, name, description, type }: AudioProps) => {
  const ref = useRef(null);
  const [status, setStatus] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus
  );

  const handlePress = () => {
    // status.isPlaying ? ref.current.pauseAsync() : ref.current.playAsync();
  };
  const isPlaying = status.isLoaded && status.isPlaying;

  return (
    <AudioContainer>
      <Video
        ref={ref}
        style={{ width: 200, height: 200 }}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        volume={1}
        onPlaybackStatusUpdate={(status) => setStatus(status)}
      />
      <Icon type={type ?? "podcast"} />
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={handlePress}
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
          <Typography $color="gray">20:00</Typography>
        </View>
      </View>
      {description && (
        <View>
          <Typography $color="gray">{description}</Typography>
        </View>
      )}
    </AudioContainer>
  );
};

export default Audio;
