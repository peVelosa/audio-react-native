import { Typography } from "@/src/components/ui/typography";
import { Tab } from "@/src/components/ui";
import MusicContent from "./music-content";
import { ContentWrapper } from "./styled";

const NavigationContent = () => {
  return (
    <>
      <ContentWrapper>
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
      </ContentWrapper>
    </>
  );
};

export default NavigationContent;
