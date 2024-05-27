import { GlobalProvider } from "@/src/contexts/global";
import { AudioProvider } from "@/src/contexts/audio";

const Providers = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <GlobalProvider>
      <AudioProvider>{children}</AudioProvider>
    </GlobalProvider>
  );
};

export default Providers;
