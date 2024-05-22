import { SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Tab } from "@/components/ui";
import Navigation from "@/components/navigation";
import MainContent from "./custom/main";

const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Root>
        <Navigation />
      </Tab.Root>
      <MainContent />
      <StatusBar />
    </SafeAreaView>
  );
};

export default HomePage;
