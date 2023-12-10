import React from "react";
import Bar from "../components/Bar";
import corecell from "../public/image/corecell.jpeg";
import Image from "next/image";
import YouTube from "react-youtube";

const song = () => {
  return (
    <div className="wrapper">
      <span className="title py-20">🎶 Song</span>
      <Bar />
      <div className="w-[500px] pt-20">
        <Image alt="" src={corecell} objectFit="contain" />
      </div>
      <YouTube
        videoId="Xf5w8beE8Ow"
        opts={{
          width: "560",
          height: "315",
          playerVars: { autoplay: 1, rel: 0, modestbranding: 1, start: 9},
        }}
      />
    </div>
  );
};

export default song;
