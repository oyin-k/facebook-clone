import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";

function Story({ image, imgSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={imgSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
