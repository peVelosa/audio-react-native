import { NavigationProvider } from "@/components/navigation/context";

type ProvidersProps = {
  children: Readonly<React.ReactNode>;
};

const Providers = ({ children }: ProvidersProps) => {
  return <NavigationProvider>{children}</NavigationProvider>;
};

export default Providers;
