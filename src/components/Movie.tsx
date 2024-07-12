import { Card, Image, Text } from "@chakra-ui/react";

type MovieTypes = {
  movie: {
    id: string;
    posterUrl: string;
  };
};
export default function Movie({ movie }: MovieTypes) {
  return (
    <Card w="40" justifyContent="center" bg="gray.300">
      {movie.posterUrl ? (
        <Image src={`${movie.posterUrl}`} w="40" objectFit="cover" />
      ) : (
        <Text textAlign="center">No Image</Text>
      )}
    </Card>
  );
}
