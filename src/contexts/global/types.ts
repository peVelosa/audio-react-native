import { type RefObject } from "react";
import { type ScrollView } from "react-native";

export type GlobalContext = {
  scrollViewRef: RefObject<ScrollView> | null;
};
