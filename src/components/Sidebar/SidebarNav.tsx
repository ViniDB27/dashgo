import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeFill,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard" >Dashboard</NavLink>
        <NavLink icon={RiContactsLine} href="/users" >Usuários</NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÂO">
        <NavLink icon={RiInputMethodLine} href="/forms" >Fomulários</NavLink>
        <NavLink icon={RiGitMergeFill} href="/automation" >Automação</NavLink>
      </NavSection>
    </Stack>
  );
}
