import { Pressable } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Typography } from "@/src/components/ui/typography";
import { Tab, useTab } from "@/src/components/ui";
import { STriggerList, Flex } from "./styled";
import { COLORS } from "@/src/constants";

const NavigationHeader = () => {
  const { active } = useTab();

  return (
    <>
      <STriggerList>
        <Tab.Trigger
          value="indice"
          asChild
        >
          <Pressable>
            <Flex>
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
            </Flex>
          </Pressable>
        </Tab.Trigger>
        <Flex>
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
        </Flex>
      </STriggerList>
    </>
  );
};

export default NavigationHeader;
