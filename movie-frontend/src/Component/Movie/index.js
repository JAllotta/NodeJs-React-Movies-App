import React, { useState } from "react";

import Table from "./table";
import Search from "./search";
import axios from "axios";

export default function Movie() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <Search updateTable={setMovies} />
      <Table movies={movies} />
    </>
  );
}
