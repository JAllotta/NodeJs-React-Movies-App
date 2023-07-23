import axios from "axios";
import React, { useState } from "react";

export default function Search({ updateTable }) {
  const [searchValue, setSearchValue] = useState("");

  async function getData() {
    //console.log(searchValue);
    try {
      const result = await axios({
        method: "get",
        //url: "http://localhost:3001/movies",        
        url: `http://localhost:3001/movies?search=${searchValue}`,        
        responseType: "json",
      });
      //console.log('Julian',result.data);
      updateTable(result.data);
    } catch (e) {
      throw e;
    }
  }

  return (
    <>
      <label>Search</label>
      <input
        type="text"
        value={searchValue}        
        onInput={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={getData}>Go</button>
    </>
  );
}
