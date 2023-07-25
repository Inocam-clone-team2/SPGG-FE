import React, { useState, useEffect } from "react";
import axios from "axios";
import instance from "../api/post";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchSummoner = async (searchText) => {
    if (!searchText) {
      setSearchResults([]);
      return;
    }

    const url = `/api/search?query=${encodeURIComponent(searchText)}`;

    try {
      const response = await instance.get(url);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error during page search:", error);
    }
  };

  useEffect(() => {
    if (searchText) {
      searchSummoner(searchText);
    }
  }, [searchText]);

  return (
    <div>
      <SeachContainer>
        <label for="searchHome" class="searchTag">
          Search
        </label>
        <input
          className="searchHome"
          placeholder="소환사명,소환사명..."
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <label
          for="searchHome"
          class="onClickSearchHandler"
          onClick={searchSummoner}
        >
          .GG
        </label>
      </SeachContainer>

      <ul>
        {searchResults.map((summoner) => (
          <li key={summoner.id}>{summoner.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
