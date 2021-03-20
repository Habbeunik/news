import React from "react";

const NewsCard = (props) => {
  return (
    <div className="newsCard">
      <div className="newsCardImage">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="newsCardContent">
        <p>{props.author || "_"}</p>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <span className="newCardDate">{props.date}</span>
      </div>
    </div>
  );
};

export default NewsCard;
