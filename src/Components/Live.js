import React, { useEffect, useState } from "react";

const useCategoryNews = (category) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&pageSize=1&apiKey=e8a9e7a99bf04d01b5c0c23db503a5b1`
    )
      .then((res) => res.json())
      .then((data) => setData(data.articles[0]));
  }, [setData, category]);
  console.log(data);
  return data;
};

const LiveNews = ({ color, category }) => {
  const data = useCategoryNews(category);

  return (
    <div className="liveNews">
      <a href={data.url} target="_blank" rel="noreferrer">
        <h6 className="liveNewsSub" style={{ color }}>
          {category}
        </h6>
        <p className="liveNewsTitle">{data.title}</p>
        <span className="newCardDate">
          {new Date(data.publishedAt).toDateString()}
        </span>
      </a>
    </div>
  );
};

const Live = () => {
  return (
    <div className="liveContainer">
      <h4 className="liveHeadline">Live</h4>
      <LiveNews color="lime" category="finance" />
      <LiveNews color="skyblue" category="tech" />
      <LiveNews color="plum" category="sport" />
      <LiveNews color="orange" category="travel" />
    </div>
  );
};

export default Live;
