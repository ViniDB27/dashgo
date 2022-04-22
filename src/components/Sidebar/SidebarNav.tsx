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
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Usuários</NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÂO">
        <NavLink icon={RiInputMethodLine}>Fomulários</NavLink>
        <NavLink icon={RiGitMergeFill}>Automação</NavLink>
      </NavSection>
    </Stack>
  );
}
