import React from "react";
import { youtube, iframe } from "./youtube.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className={youtube}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className={iframe}
    />
  </div>
);

export default YoutubeEmbed;
