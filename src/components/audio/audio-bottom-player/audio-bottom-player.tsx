import { useEffect, useState } from "react";
import { Dimensions, type GestureResponderEvent } from "react-native";
import { Wrapper } from "./styled";
import { useAudio, type Audio } from "@/modules/audio";
import ProgressBar from "./progress-bar/progress-bar";
import AudioInformation from "./audio-information/audio-infortmation";

const windowWidth = Dimensions.get("window").width;

const AudioBottomPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<Audio | null>(null);

  const {
    currentPlayingAudio,
    handlePause,
    handlePlay: HandlePlay,
    isUpdatingPlayer,
  } = useAudio();

  useEffect(() => {
    if (currentPlayingAudio) {
      setIsOpen(true);
      setCurrentAudio({ ...currentPlayingAudio });
      return;
    }
  }, [currentPlayingAudio]);

  if (!isOpen || !currentAudio) return null;

  const handlePlay = async (from?: number) => {
    if (isUpdatingPlayer) return;
    await HandlePlay({ name: currentAudio.name, src: currentAudio.src, from });
  };

  const handleClose = () => {
    handlePause({
      name: currentAudio.name,
      src: currentAudio.src,
      isPlaying: false,
    });
    setIsOpen(false);
  };

  const updateVisualProgress = (e: GestureResponderEvent) => {
    if (!currentAudio) return { progress: 0, duration: 0, progressInMs: 0 };
    const duration = currentAudio.durationInMillis;
    const x = e.nativeEvent.locationX;
    const progress = (x / windowWidth) * 100;

    const progressInMs = currentAudio.durationInMillis * (progress / 100);

    setCurrentAudio({ ...currentAudio, currentMillis: progressInMs });

    return { progress, duration, progressInMs };
  };

  return (
    <Wrapper>
      <ProgressBar
        currentAudio={currentAudio}
        handlePlay={handlePlay}
        isUpdatingPlayer={isUpdatingPlayer}
        updateVisualProgress={updateVisualProgress}
      />
      <AudioInformation
        currentAudio={currentAudio}
        isPlaying={!!currentPlayingAudio}
        handlePlay={handlePlay}
        handleClose={handleClose}
      />
    </Wrapper>
  );
};

export default AudioBottomPlayer;
