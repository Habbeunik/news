import React from "react";

const NewsCard = (props) => {
  return (
    <div className="newsCard">
      <a href={props.url} target="_blank" rel="noreferrer">
        <div className="newsCardImage">
          <img
            src={props.image || "https://i.stack.imgur.com/y9DpT.jpg"}
            alt={props.title}
          />
        </div>
        <div className="newsCardContent">
          <p>{props.author || "_"}</p>
          <h5>{props.title}</h5>
          <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
          <span className="newCardDate">{props.date}</span>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
