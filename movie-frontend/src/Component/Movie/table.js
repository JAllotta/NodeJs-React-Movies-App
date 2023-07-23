import React from "react";

function Row({ movie }) {
  return (
    <tr>
      <td>{movie.Title}</td>
      <td>{movie.Year}</td>
    </tr>
  );
}

export default function Table({ movies }) {
  const rows = [];

  movies.forEach((movie) => {
    console.log(movie);
    rows.push(<Row key={movie.imdbId} movie={movie} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
