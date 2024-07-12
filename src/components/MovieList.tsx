import { Flex } from "@chakra-ui/react";
import Movie from "./Movie";

type MovieTypes = {
  movies: {
    data: {
      id: string;
      posterUrl: string;
    }[];
  };
};

export default function MovieList({ movies }: MovieTypes) {
  return (
    <Flex wrap="wrap" gap="4" w={["95%", "80%"]}>
      {movies &&
        movies.data.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
    </Flex>
  );
}
