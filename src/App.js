import React, { useState } from "react";
import "./styles.css";
import samples from "./sample.json";

function News(props) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  console.log(props.image_url);

  return (
    <>
      <div key={props.index} className="card_news">
        <span onClick={handleClose}>x</span>
        <div className="card_img_title">
          <img
            alt="alt"
            src={props.image_url ?? "https://placehold.co/600x400/000000/FFF"}
            className="card_img"
          />
          <div className="card_img_creator">
            <h1 className="h1">{props.title}</h1>
            <p>
              Article by <strong>{props.creator}</strong>
            </p>
          </div>
        </div>
        <p className="description">{props.description}</p>
        <a href={props.link} target="_blank" rel="noreferrer" className="link">
          READ MORE
        </a>
      </div>
    </>
  );
}

function NewsList(props) {
  return (
    <>
      {props.newsArray.map((news, index) => {
        return (
          <News
            key={index}
            title={news.title}
            image_url={news.image_url}
            creator={news.creator}
            description={news.description}
            link={news.link}
          />
        );
      })}
    </>
  );
}

export default function App() {
  const newsArray = samples.results;
  return (
    <div className="news_page_layout">
      <NewsList newsArray={newsArray} />
    </div>
  );
}
