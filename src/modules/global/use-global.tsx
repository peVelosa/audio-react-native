import { useContext } from "react";
import { globalContext } from "./global-provider";

export const useGlobal = () => {
  if (!globalContext)
    throw new Error("useGlobal must be used within a GlobalProvider");
  return useContext(globalContext);
};
