import React from "react";
import timelineData from "./data.js";
import "./App.css";
const App = () => {
  return (
    <nav className="tmln tmln--box">
      <h2 className="tmln__header"></h2>
      <ul className="tmln__list">
        {timelineData.map((item, index) => (
          <li
            key={index}
            className={`tmln__item ${
              item.isActive ? "tmln__item--active" : ""
            }`}
          >
            <span data-title={item.timeAgo}>{item.timeAgo}</span>
            {item.headline && (
              <h3 className="tmln__item-headline">{item.headline}</h3>
            )}
            {item.content && <p>{item.content}</p>}
            {item.link && (
              <a href={item.link} className="block-link">
                {item.linkText}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default App;
