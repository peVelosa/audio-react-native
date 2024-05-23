import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { AudioContainer } from "./styled";
import { Typography } from "@/components/ui/typography";
import Icon from "./icon/icon";
import { convertTimeFromMillisToSeconds } from "@/src/utils";
import { useAudio } from "@/src/hooks/use-audio";
import VideoHeader from "./video-header/video-header";
import { type Audio as TAudio } from "@/src/providers/AudioProvider";

export type AudioProps = {
  src: string;
  name: string;
  description?: string;
  type?: "podcast" | "book";
};

const Audio = ({ src, name, description, type }: AudioProps) => {
  const audioRef = useRef<Video>(null);
  const containerRef = useRef<number>(0);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus
  );

  const { subscribe } = useAudio();

  useEffect(() => {
    const isLoaded = status.isLoaded;
    const playerStatus: TAudio = {
      name,
      src,
      type: "audio",
      durationAsString: isLoaded
        ? convertTimeFromMillisToSeconds(status.durationMillis ?? 0)
        : "",
      player: audioRef.current,
      durationInMillis: isLoaded ? status.durationMillis ?? 0 : 0,
      isPlaying: isLoaded && status.isPlaying,
      isLoaded,
      currentMillis: isLoaded ? status.positionMillis ?? 0 : 0,
      error,
      containerOffSetHeight: containerRef.current,
    };
    subscribe(playerStatus);
  }, [
    status.isLoaded,
    status.isLoaded && status.positionMillis,
    status.isLoaded && status.isPlaying,
    error,
  ]);

  const handleStatusUpdate = (status: AVPlaybackStatus) => setStatus(status);

  const handleError = () => setError(true);

  return (
    <View
      onLayout={(params) => {
        containerRef.current = params.nativeEvent.layout.y;
      }}
    >
      <AudioContainer style={{ opacity: status.isLoaded ? 1 : 0.75 }}>
        <Video
          ref={audioRef}
          style={{ width: 0, height: 0 }}
          source={{ uri: src }}
          useNativeControls
          volume={1}
          progressUpdateIntervalMillis={1000}
          onPlaybackStatusUpdate={handleStatusUpdate}
          onLoad={handleStatusUpdate}
          onError={handleError}
        />
        <Icon type={type ?? "podcast"} />
        <VideoHeader
          name={name}
          src={src}
        />
        {description && (
          <View>
            <Typography $color="gray">{description}</Typography>
          </View>
        )}
      </AudioContainer>
    </View>
  );
};

export default Audio;
