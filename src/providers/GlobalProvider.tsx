import { RefObject, createContext, useRef } from "react";
import { ScrollView } from "react-native";

type GlobalContext = {
  scrollViewRef: RefObject<ScrollView> | null;
};

export const globalContext = createContext({} as GlobalContext);

const GlobalProvider = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <globalContext.Provider value={{ scrollViewRef }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalProvider;
