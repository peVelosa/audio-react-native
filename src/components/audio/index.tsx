import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { AudioContainer } from "./styled";
import { Typography } from "@/components/ui/typography";
import Icon from "./icon/icon";
import VideoHeader from "./video-header/video-header";
import { type Audio as TAudio, useAudio } from "@/modules/audio";
import { convertTimeFromMillisToSeconds } from "@/src/utils";

export type AudioProps = {
  source: string;
  name: string;
  description?: string;
  type?: "podcast" | "book";
};

const VimeoRegex = /vimeo.com/;

const Audio = ({ source, name, description, type }: AudioProps) => {
  const audioRef = useRef<Video>(null);
  const containerRef = useRef<number>(0);
  const [error, setError] = useState(false);
  const [isVimeoLoaded, setIsVimeoLoaded] = useState(false);
  const [src, setSrc] = useState(source);
  const [status, setStatus] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus
  );

  const { subscribe } = useAudio();

  const fetchVimeoData = async () => {
    try {
      const res = await fetch(source + "/config", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ec954eee04c56231a947a931f6c94555`,
        },
        method: "GET",
      });
      const data = await res.json();
      setSrc(
        data.request.files.hls.cdns[data.request.files.hls.default_cdn].url
      );
    } catch (e) {
      console.log(e);
    }
    setIsVimeoLoaded(true);
  };

  useEffect(() => {
    if (!VimeoRegex.test(source)) return;

    fetchVimeoData();
  }, []);

  useEffect(() => {
    if (VimeoRegex.test(source) && !isVimeoLoaded) return;
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
    isVimeoLoaded,
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
