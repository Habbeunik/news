import React from "react";

import Header from "../Components/Header";
import Nav from "../Components/Nav";
import NewsCard from "../Components/NewsCard";

const Search = () => {
  return (
    <>
      <Header page="Search" />
      <Nav />
      <div className="newsGallery">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </>
  );
};

export default Search;
