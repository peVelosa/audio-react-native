import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import MainWrapper from "./custom/main-wrapper";
import MainContent from "./custom/main";
import Navigation from "@/components/navigation";
import AudioBottomPlayer from "@/components/audio/audio-bottom-player/audio-bottom-player";
import { Tab } from "@/components/ui";

const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Root>
        <Navigation />
      </Tab.Root>
      <MainWrapper>
        <MainContent />
      </MainWrapper>
      <AudioBottomPlayer />
      <StatusBar />
    </SafeAreaView>
  );
};

export default HomePage;
