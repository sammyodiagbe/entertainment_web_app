import { useState } from "react";
import IconSearch from "./icons/icon-search";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  <div className="search-container">
    <form className="form">
      <IconSearch />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  </div>;
};

export default Search;
