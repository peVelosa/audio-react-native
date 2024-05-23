import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Tab } from "@/components/ui";
import AudioBottomPlayer from "@/components/audio/audio-bottom-player/audio-bottom-player";
import Navigation from "@/components/navigation";
import MainContent from "./custom/main";

const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Root>
        <Navigation />
      </Tab.Root>
      <MainContent />
      <AudioBottomPlayer />
      <StatusBar />
    </SafeAreaView>
  );
};

export default HomePage;
