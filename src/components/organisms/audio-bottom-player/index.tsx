import * as S from "./styles";
import ProgressBar from "@/atoms/progress-bar";
import AudioInformation from "@/atoms/audio-information";
import { useAudioBottomPlayer } from "@/hooks/use-audio-bottom-player";

const AudioBottomPlayer = () => {
  const {
    currentAudio,
    handlePlay,
    updateVisualProgress,
    handleClose,
    isOpen,
    isUpdatingPlayer,
    isPlaying,
  } = useAudioBottomPlayer();

  if (!isOpen || !currentAudio) return null;

  return (
    <S.Wrapper>
      <ProgressBar
        currentAudio={currentAudio}
        handlePlay={handlePlay}
        isUpdatingPlayer={isUpdatingPlayer}
        updateVisualProgress={updateVisualProgress}
      />
      <AudioInformation
        currentAudio={currentAudio}
        handleClose={handleClose}
        handlePlay={handlePlay}
        isPlaying={isPlaying}
      />
    </S.Wrapper>
  );
};

export default AudioBottomPlayer;
