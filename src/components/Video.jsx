import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const videos = [
    {
      title: "5 Cara Hindari Food Waste Agar Tak Lagi Membuang-buang Makanan",
      youtubeLink: "https://www.youtube.com/watch?v=GupI0hh_0VU",
    },
    {
      title: "Food Waste causes Climate Change. Here's how we stop it.",
      youtubeLink: "https://www.youtube.com/watch?v=1MpfEeSem_4",
    },
    {
      title: "How To End The Food Waste Fiasco | Rob Greenfield | TEDxTeen",
      youtubeLink: "https://www.youtube.com/watch?v=w96osGZaS74",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Video Page</h1>
      {videos.map((video, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
          <div className="aspect-w-16 aspect-h-9">
            <ReactPlayer url={video.youtubeLink} controls={true} width="100%" height="500px" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Video;
