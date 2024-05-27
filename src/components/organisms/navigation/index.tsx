import NavigationHeader from "@/molecules/navigation-header";
import NavigationContent from "@/molecules/navigation-content";
import { Wrapper } from "./styles";

const Navigation = () => {
  return (
    <>
      <Wrapper>
        <NavigationHeader />
        <NavigationContent />
      </Wrapper>
    </>
  );
};

export default Navigation;
