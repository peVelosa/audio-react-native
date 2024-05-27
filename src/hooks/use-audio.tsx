import { useContext } from "react";
import { audioContext } from "@/contexts/audio/audio-provider";

export const useAudio = () => {
  if (!audioContext)
    throw new Error("useGlobal must be used within a GlobalProvider");
  return useContext(audioContext);
};
