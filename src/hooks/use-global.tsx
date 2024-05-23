import { useContext } from "react";
import { globalContext } from "@/src/providers/GlobalProvider";

export const useGlobal = () => useContext(globalContext);
