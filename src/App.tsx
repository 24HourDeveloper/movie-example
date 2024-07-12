import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Select, Input, Flex } from "@chakra-ui/react";
import Pagination from "./components/Pagination";
import MovieList from "./components/MovieList";
import { options } from "./util/genreOptions";
import { getMovies, fetchToken } from "./api/fetchMovies";

function App() {
  fetchToken();
  const [page, setPage] = useState(1);
  const { register, watch, setValue } = useForm();

  const { data: movies } = useQuery({
    queryKey: ["movies", page, watch("search"), watch("genre")],
    queryFn: () => {
      const searchWord = watch("search");
      if (searchWord.length > 0) setPage(1);
      return getMovies(page, searchWord, watch("genre"));
    },
  });

  return (
    <Flex
      flexDirection="column"
      gap="6"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDirection="column"
        gap="4"
        w={["95%", "80%"]}
        justifyContent="center"
        mt="4"
      >
        <Pagination
          movies={movies && movies.totalPages}
          page={page}
          setNextPage={() => {
            if (page === movies.totalPages) return;
            setPage(page + 1);
          }}
          setPrevPage={() => {
            if (page === 1) return;
            setPage(page - 1);
          }}
        />
        <Input placeholder="SEARCH MOVIES" {...register("search")} size="lg" />
        <Select
          placeholder="Select option"
          textTransform="capitalize"
          size="lg"
          {...register("genre")}
          onChange={(e) => {
            setPage(1);
            setValue("genre", e.target.value);
          }}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Select>
      </Flex>
      <MovieList movies={movies} />
    </Flex>
  );
}

export default App;
