import { type ReactNode } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import AudioBottomPlayer from "@/organisms/audio-bottom-player";
import { Tab } from "@/organisms/tab";
import Providers from "./providers";
import Navigation from "@/organisms/navigation";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode => {
  return (
    <Providers>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Root>
          <Navigation />
        </Tab.Root>
        {children}
        <AudioBottomPlayer />
        <StatusBar />
      </SafeAreaView>
    </Providers>
  );
};

export default RootLayout;
