import { Wrapper } from "./styled";
import ProgressBar from "./progress-bar/progress-bar";
import AudioInformation from "./audio-information/audio-information";
import useAudioBottomPlayer from "./use-audio-bottom-player";

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
    <Wrapper>
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
    </Wrapper>
  );
};

export default AudioBottomPlayer;
