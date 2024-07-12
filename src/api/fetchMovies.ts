export const fetchToken = async () => {
  const hasToken = localStorage.getItem("authToken");
  if (hasToken) return;

  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/token`);
    const data = await res.json();
    localStorage.setItem("authToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const getMovies = async (page: number, search: string, genre: string) => {
  const token = localStorage.getItem("authToken");
  try {
    const res = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/movies?page=${page}&search=${search}&genre=${genre}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};