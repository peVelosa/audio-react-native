import { Pressable } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Typography } from "@/styles/typography";
import { Tab, useTab } from "@/organisms/tab";
import { COLORS } from "@/src/constants";
import * as S from "./styles";

const NavigationHeader = () => {
  const { active } = useTab();

  return (
    <>
      <S.View>
        <Tab.Trigger
          value="indice"
          asChild
        >
          <Pressable>
            <S.Flex>
              <MaterialCommunityIcons
                name="dots-horizontal-circle-outline"
                size={24}
                color={
                  active === "indice" ? COLORS["primary"] : COLORS["white"]
                }
              />
              <Typography
                $color={active === "indice" ? "primary" : "white"}
                $size={"size14"}
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                índice
              </Typography>
            </S.Flex>
          </Pressable>
        </Tab.Trigger>
        <S.Flex>
          <Tab.Trigger
            value="music"
            asChild
          >
            <Pressable>
              <FontAwesome5
                name={"music"}
                size={20}
                color={active === "music" ? COLORS["primary"] : COLORS["white"]}
              />
            </Pressable>
          </Tab.Trigger>
          <Tab.Trigger
            value="video"
            asChild
          >
            <Pressable>
              <FontAwesome5
                name={"play"}
                size={20}
                color={active === "video" ? COLORS["primary"] : COLORS["white"]}
              />
            </Pressable>
          </Tab.Trigger>
        </S.Flex>
      </S.View>
    </>
  );
};

export default NavigationHeader;
