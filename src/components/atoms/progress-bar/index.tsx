import { useState } from "react";
import { type GestureResponderEvent } from "react-native";
import { type Audio } from "@/src/contexts/audio";
import * as S from "./styles";

type ProgressBarProps = {
  currentAudio: Audio | null;
  isUpdatingPlayer: boolean;
  handlePlay: (from?: number) => Promise<void>;
  updateVisualProgress: (e: GestureResponderEvent) => {
    progress: number;
    duration: number;
    progressInMs: number;
  };
};

const ProgressBar = ({
  currentAudio,
  handlePlay,
  updateVisualProgress,
}: ProgressBarProps) => {
  const [visualProgress, setVisualProgress] = useState<number | null>(null);

  const getProgress = () => {
    if (!currentAudio) return 0;
    return (currentAudio.currentMillis / currentAudio.durationInMillis) * 100;
  };

  const handleTouchMove = (e: GestureResponderEvent) => {
    const { progress } = updateVisualProgress(e);
    setVisualProgress(progress);
  };

  const handlePressOut = async (e: GestureResponderEvent) => {
    const { progress, duration } = updateVisualProgress(e);
    const millis = ((progress / 100) * duration).toFixed(0);

    await handlePlay(Number(millis));
  };

  return (
    <S.Bar
      onPressOut={handlePressOut}
      onTouchMove={handleTouchMove}
      onPressIn={handleTouchMove}
    >
      <S.Progress $progress={visualProgress ? visualProgress : getProgress()} />
    </S.Bar>
  );
};

export default ProgressBar;
