import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type SidebarDrawerContetxData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContetxData);

interface SidebarDrawerProvider {
  children: ReactNode;
}

export function SidebarDrawerProvider({ children }: SidebarDrawerProvider) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
