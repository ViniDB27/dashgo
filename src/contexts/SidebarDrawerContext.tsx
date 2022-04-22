import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

type SidebarDrawerContetxData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContetxData);

interface SidebarDrawerProvider {
  children: ReactNode;
}

export function SidebarDrawerProvider({ children }: SidebarDrawerProvider) {
  const disclosure = useDisclosure();

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
