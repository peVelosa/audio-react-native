import { Video } from "expo-av";

export type GetAudio = Pick<Audio, "name" | "src"> & { isPlaying?: boolean };

export type HandlePlay = GetAudio & { from?: number };

export type AudioContext = {
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
