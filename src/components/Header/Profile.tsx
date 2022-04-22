import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vinicio Brejinski</Text>
          <Text color="gray.300" fontSize="small">
            viniciosdb@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="vinicio brejinski"
        src="https://avatars.githubusercontent.com/u/48477457?v=4"
      />
    </Flex>
  );
}
