import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import Header from "../Components/Header";
import Nav from "../Components/Nav";
import NewsCard from "../Components/NewsCard";
import SearchBox from "../Components/SearchBox";
import useDebounce from "../debounce";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const __query = useQuery();
  const q = __query.get("q");

  const [query, setQuery] = useState("");
  const [fetching, setFetching] = useState(false);
  const [articles, setArticles] = useState([]);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (q) {
      setQuery(q);
    }
  }, [q]);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      return;
    }

    setFetching(true);
    fetch(
      `https://newsapi.org/v2/everything?q=${debouncedQuery}&language=en&apiKey=e8a9e7a99bf04d01b5c0c23db503a5b1`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles || []);
        setFetching(false);
      });
  }, [debouncedQuery]);

  return (
    <>
      <Header page="Search" />
      <Nav />
      <div className="newsGallery">
        <SearchBox value={query} onChange={setQuery} />
        <h3 className="searchTitle">Results</h3>
        {fetching ? (
          <>
            <div className="newsPlaceholder"></div>
            <div className="newsPlaceholder"></div>
            <div className="newsPlaceholder"></div>
            <div className="newsPlaceholder"></div>
            <div className="newsPlaceholder"></div>
            <div className="newsPlaceholder"></div>
          </>
        ) : (
          articles.map((newsItem) => (
            <NewsCard
              url={newsItem.url}
              image={newsItem.urlToImage}
              title={newsItem.title}
              description={newsItem.description}
              date={new Date(newsItem.publishedAt).toDateString()}
              author={newsItem.author}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Search;
