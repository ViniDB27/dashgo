import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface Paginationprops {
  totalCountOfRegister: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
  siblingsCount?: number;
}

export function Pagination({
  totalCountOfRegister,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
  siblingsCount = 1,
}: Paginationprops) {
  const lastPage = Math.floor(totalCountOfRegister / registersPerPage);

  function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
      .map((_, index) => {
        return from + index + 1;
      })
      .filter((page) => page > 0);
  }

  const previusPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      spacing="6"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de{" "}
        <strong>{totalCountOfRegister}</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <PaginationItem onPageChange={onPageChange} number={1} />
        )}

        {previusPages.length > 0 &&
          previusPages.map((page) => (
            <>
              {currentPage > 2 + siblingsCount && (
                <Text color="gray.300" width="8" textAlign="center">
                  ...
                </Text>
              )}
              <PaginationItem
                onPageChange={onPageChange}
                number={page}
                key={page}
              />
            </>
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length < 0 &&
          nextPages.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              number={page}
              key={page}
            />
          ))}

        {currentPage + siblingsCount > lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
