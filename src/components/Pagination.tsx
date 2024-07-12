import { Button, Flex, Text } from "@chakra-ui/react";

type PaginationTypes = {
  page: number;
  setPrevPage: () => void;
  setNextPage: () => void;
  movies: number | null;
};

export default function Pagination({
  page,
  setPrevPage,
  setNextPage,
  movies,
}: PaginationTypes) {
  return (
    <Flex alignItems="center" gap="4" justifyContent="center">
      <Button
        w="100px"
        colorScheme="red"
        onClick={setPrevPage}
        textTransform="uppercase"
      >
        Previous
      </Button>

      <Text>
        {page} of {movies}
      </Text>
      <Button
        w="100px"
        colorScheme="red"
        onClick={setNextPage}
        textTransform="uppercase"
      >
        Next
      </Button>
    </Flex>
  );
}
