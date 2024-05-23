import { Video } from "expo-av";
import { createContext, useState } from "react";

type GetAudio = Pick<Audio, "name" | "src"> & { isPlaying?: boolean };

type HandlePlay = GetAudio & { from?: number };

type AudioContext = {
  subscribe: (audio: Audio) => void;
  getAudio: (props: GetAudio) => Audio | undefined;
  handlePlay: (props: HandlePlay) => Promise<void>;
  handlePause: (props: HandlePlay) => Promise<void>;
  currentPlayingAudio: Audio | undefined;
  audios: Audio[];
  isUpdatingPlayer: boolean;
};

export type Audio = {
  name: string;
  src: string;
  player: Video | null;
  durationAsString: string;
  durationInMillis: number;
  currentMillis: number;
  isPlaying: boolean;
  isLoaded: boolean;
  error: boolean;
  containerOffSetHeight: number;
  type: "audio" | "video";
};

export const audioContext = createContext({} as AudioContext);

const AudioProvider = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const [audios, setAudios] = useState<Audio[]>([]);
  const [isUpdatingPlayer, setIsUpdatingPlayer] = useState(false);
  const currentPlayingAudio = audios.find((audio) => audio.isPlaying);

  const getAudio = ({ src, name }: GetAudio) => {
    return audios.find((audio) => audio.src === src && audio.name === name);
  };

  const subscribe = (props: Audio) => {
    const audio = getAudio({ name: props.name, src: props.src });
    if (!audio) {
      setAudios((oldAudios) => [...oldAudios, { ...props }]);
      return;
    }
    const updatedAudios = audios.map((audio) => {
      if (audio.src === props.src && audio.name === props.name) {
        return { ...audio, ...props };
      }
      return audio;
    });
    setAudios(updatedAudios);
  };

  const _pauseAudios = async () => {
    const pauseAudiosPromise = audios.map(async (audio) => {
      if (audio.isPlaying && audio.player) {
        await audio.player.pauseAsync();
        return { ...audio, isPlaying: false };
      }
      return audio;
    });

    const pauseAudios = await Promise.all(pauseAudiosPromise);
    setAudios(pauseAudios);
  };

  const handlePlay = async ({ name, src, from }: HandlePlay) => {
    if (isUpdatingPlayer) return;
    const audio = getAudio({ name, src });
    if (!audio || !audio.player) return;

    await _pauseAudios();

    const isPlaying = audio.isPlaying;
    setIsUpdatingPlayer(true);
    if (from) {
      isPlaying
        ? await audio.player.playFromPositionAsync(from)
        : await audio.player.setStatusAsync({
            positionMillis: from,
            shouldPlay: false,
          });
    } else {
      isPlaying
        ? await audio.player.pauseAsync()
        : await audio.player.playAsync();
    }
    setIsUpdatingPlayer(false);
  };

  const handlePause = async ({ name, src }: GetAudio) => {
    const audio = getAudio({ name, src });
    if (!audio || !audio.player) return;

    await audio.player.pauseAsync();
  };

  return (
    <audioContext.Provider
      value={{
        subscribe,
        getAudio,
        handlePlay,
        currentPlayingAudio,
        handlePause,
        audios,
        isUpdatingPlayer,
      }}
    >
      {children}
    </audioContext.Provider>
  );
};

export default AudioProvider;
