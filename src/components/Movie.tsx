import { Card, Image, Text, Flex, Heading } from "@chakra-ui/react";

type MovieTypes = {
  movie: {
    id: string;
    posterUrl: string;
    title: string;
    rating: string;
  };
  isSearched: boolean;
};
export default function Movie({ movie, isSearched }: MovieTypes) {
  return (
    <Card w={isSearched ? "80" : "40"} justifyContent="center" bg="gray.300">
      {movie.posterUrl ? (
        <Image
          src={`${movie.posterUrl}`}
          w={isSearched ? "80" : "40"}
          objectFit="cover"
        />
      ) : (
        <Text textAlign="center">No Image</Text>
      )}
      {isSearched && (
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading>{movie.title}</Heading>
          <Text fontSize="xl">Rated: {movie.rating}</Text>
        </Flex>
      )}
    </Card>
  );
}
