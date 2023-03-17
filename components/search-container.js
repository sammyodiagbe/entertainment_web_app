import { useState } from "react";
import IconSearch from "./icons/icon-search";

const Search = ({ title }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="search-container">
      <form className="form">
        <IconSearch />
        <input
          type="text"
          placeholder={title}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
