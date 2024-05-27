import { ScrollView } from "react-native";
import CustomTemplate from "@/templates/custom";
import { useGlobal } from "@/hooks/use-global";
import * as S from "./styles";
import { type FC } from "react";

const HomeTemplate: FC = () => {
  const { scrollViewRef } = useGlobal();

  return (
    <>
      <ScrollView ref={scrollViewRef}>
        <S.MainView>
          <CustomTemplate />
        </S.MainView>
      </ScrollView>
    </>
  );
};

export default HomeTemplate;
