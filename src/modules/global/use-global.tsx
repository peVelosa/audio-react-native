import { useContext } from "react";
import { globalContext } from "./global-provider";

export const useGlobal = () => useContext(globalContext);
