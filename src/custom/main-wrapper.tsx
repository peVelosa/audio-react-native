import { ScrollView } from "react-native";
import { useGlobal } from "@/modules/global";
import { MainView } from "./styled";

const MainWrapper = ({ children }: { children: Readonly<React.ReactNode> }) => {
  const { scrollViewRef } = useGlobal();

  return (
    <ScrollView ref={scrollViewRef}>
      <MainView>{children}</MainView>
    </ScrollView>
  );
};

export default MainWrapper;
