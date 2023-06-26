import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const [ videos, setVideos ] = useState([])
  
  useEffect(()=>{
    fetchData()
  }, [])
  
  useEffect(()=>{
    console.log(videos)
  }, [videos])
  
  const fetchData = async () => {
    await fetch('http://localhost:3000/video', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((resData) => {
      const newData = Object.keys(resData).map((id) => ({ ...resData[id], id }));
       setVideos(newData);
    })
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Video Page</h1>
      {videos.map((video, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
          <div className="aspect-w-16 aspect-h-9">
            <ReactPlayer url={video.videoUrl} controls={true} width="100%" height="500px" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Video;
