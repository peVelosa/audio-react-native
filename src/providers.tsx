import { GlobalProvider } from "@/modules/global";
import { AudioProvider } from "@/modules/audio";

const Providers = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <GlobalProvider>
      <AudioProvider>{children}</AudioProvider>
    </GlobalProvider>
  );
};

export default Providers;
