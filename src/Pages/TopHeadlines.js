import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import Nav from "../Components/Nav";
import NewsCard from "../Components/NewsCard";

const TopHeadlines = () => {
  const [fetching, setFetching] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setFetching(true);
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=e8a9e7a99bf04d01b5c0c23db503a5b1"
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setFetching(false);
      });
  }, []);

  return (
    <>
      <Header page="Top Headlines" />
      <Nav />
      <div className="newsGallery">
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

export default TopHeadlines;

//e8a9e7a99bf04d01b5c0c23db503a5b1
