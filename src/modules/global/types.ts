import { RefObject } from "react";
import { ScrollView } from "react-native";

export type GlobalContext = {
  scrollViewRef: RefObject<ScrollView> | null;
};
