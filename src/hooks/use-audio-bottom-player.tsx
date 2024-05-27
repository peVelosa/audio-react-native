import { useEffect, useState } from "react";
import { Dimensions, type GestureResponderEvent } from "react-native";
import { type Audio } from "@/contexts/audio";
import { useAudio } from "@/hooks/use-audio";

const windowWidth = Dimensions.get("window").width;

const useAudioBottomPlayer = () => {
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

  const handlePlay = async (from?: number) => {
    if (isUpdatingPlayer || !currentAudio) return;
    await HandlePlay({ name: currentAudio.name, src: currentAudio.src, from });
  };

  const handleClose = () => {
    if (!currentAudio) return;
    handlePause({
      name: currentAudio.name,
      src: currentAudio.src,
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

  return {
    isOpen,
    currentAudio,
    handlePlay,
    handleClose,
    updateVisualProgress,
    isUpdatingPlayer,
    isPlaying: !!currentPlayingAudio,
  };
};

export { useAudioBottomPlayer };
