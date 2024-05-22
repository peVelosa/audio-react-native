import { View } from "react-native";
import { Typography } from "@/src/components/ui/typography";
import { Tab } from "@/src/components/ui";

const NavigationContent = () => {
  return (
    <>
      <View>
        <Tab.Content value="indice">
          <Typography
            $size={"sm"}
            $color="white"
          >
            Indice
          </Typography>
        </Tab.Content>
        <Tab.Content value="music">
          <Typography
            $size={"sm"}
            $color="white"
          >
            Musica
          </Typography>
        </Tab.Content>
        <Tab.Content value="video">
          <Typography
            $size={"sm"}
            $color="white"
          >
            Video
          </Typography>
        </Tab.Content>
      </View>
    </>
  );
};

export default NavigationContent;
