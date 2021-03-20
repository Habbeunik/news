import React from "react";

import Header from "../Components/Header";
import Nav from "../Components/Nav";
import NewsCard from "../Components/NewsCard";

const AllNews = () => {
  return (
    <>
      <Header page="All News" />
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

export default AllNews;
