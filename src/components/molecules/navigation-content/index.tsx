import { Typography } from "@/styles/typography";
import { Tab } from "@/organisms/tab";
import MusicContent from "@/atoms/music-content";
import * as S from "./styles";

const NavigationContent = () => {
  return (
    <>
      <S.Wrapper>
        <Tab.Content value="indice">
          <Typography
            $size={"size14"}
            $color="white"
          >
            Indice
          </Typography>
        </Tab.Content>
        <Tab.Content value="music">
          <MusicContent />
        </Tab.Content>
        <Tab.Content value="video">
          <Typography
            $size={"size14"}
            $color="white"
          >
            Video
          </Typography>
        </Tab.Content>
      </S.Wrapper>
    </>
  );
};

export default NavigationContent;
