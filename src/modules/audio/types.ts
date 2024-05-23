import { type Video } from "expo-av";

export type GetAudio = Pick<Audio, "name" | "src">;

export type HandlePlay = GetAudio & { from?: number };

export type AudioContext = {
  audios: Audio[];
  isUpdatingPlayer: boolean;
  currentPlayingAudio: Audio | undefined;
  subscribe: (audio: Audio) => void;
  getAudio: (audio: GetAudio) => Audio | undefined;
  handlePlay: (audio: HandlePlay) => Promise<void>;
  handlePause: (audio: HandlePlay) => Promise<void>;
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
