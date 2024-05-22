import React, { createContext, useState, useContext } from "react";
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  View,
  ViewProps,
} from "react-native";

type TabContext = {
  active: string;
  handleSetActive: (val: string) => void;
};

const tabContext = createContext({} as TabContext);

export const useTab = () => useContext(tabContext);

type Children = {
  children: React.ReactNode;
};

type TabsProps = {
  defaultActive?: string;
} & Children;

const Tabs = ({ children, defaultActive = "" }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActive);

  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <tabContext.Provider
      value={{ active: activeTab, handleSetActive: handleSetActiveTab }}
    >
      {children}
    </tabContext.Provider>
  );
};

type TabsItem = {
  value: string;
} & Children;

const TriggerList = ({ children }: Children) => {
  return <>{children}</>;
};

type TriggerProps = {
  asChild?: boolean;
} & TabsItem;

const Trigger = ({ children, value, asChild = false }: TriggerProps) => {
  const { active, handleSetActive } = useTab();

  const handlePress = () => {
    if (active === value) return handleSetActive("");
    handleSetActive(value);
  };

  const childWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<PressableProps>(child)) {
      return React.cloneElement(child, {
        onPress: (e: GestureResponderEvent) => {
          handlePress();
          if (child.props.onPress) child.props.onPress(e);
        },
      });
    }
    return child;
  });

  if (asChild) return <>{childWithProps}</>;

  return <Pressable onPress={handlePress}>{children}</Pressable>;
};

const Content = ({ children, value }: TabsItem) => {
  const { active } = useTab();

  return active === value ? <>{children}</> : null;
};

const Tab = {
  Root: Tabs,
  TriggerList,
  Trigger,
  Content,
};

export { Tab };
