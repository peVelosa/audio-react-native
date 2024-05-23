import { GlobalProvider } from "@/modules/global";
import { AudioProvider } from "@/modules/audio";

type ProvidersProps = {
  children: Readonly<React.ReactNode>;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <GlobalProvider>
      <AudioProvider>{children}</AudioProvider>
    </GlobalProvider>
  );
};

export default Providers;
