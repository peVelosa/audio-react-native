import { useState } from "react";
import { type GestureResponderEvent } from "react-native";
import { Bar, Progress } from "./styled";
import { type Audio } from "@/modules/audio";

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
    <Bar
      onPressOut={handlePressOut}
      onTouchMove={handleTouchMove}
      onPressIn={handleTouchMove}
    >
      <Progress $progress={visualProgress ? visualProgress : getProgress()} />
    </Bar>
  );
};

export default ProgressBar;
