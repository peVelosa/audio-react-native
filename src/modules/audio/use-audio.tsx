import { useContext } from "react";
import { audioContext } from "@/src/providers/AudioProvider";

export const useAudio = () => useContext(audioContext);
