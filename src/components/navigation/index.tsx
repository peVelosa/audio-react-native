import NavigationHeader from "./_components/navigation-header/navigation-header";
import NavigationContent from "./_components/navigation-content/navigation-content";
import { Wrapper } from "./styled";

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
