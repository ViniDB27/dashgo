import { Icon, Text, Link, LinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavLinkProps extends LinkProps {
  children: string;
  icon: IconType;
}

export function NavLink({ children, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
