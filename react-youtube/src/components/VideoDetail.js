import React from "react";


const VideoDetail = ({ video }) => {
    
    if (!video) {
        return <p>Loading spinner goes here...</p>
    }

    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

    return (
        <>
           
            <div className="embed-responsive embed-responsive-16by9">
                
                <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
            </div>
           
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
        </>
    )
}

export default VideoDetail;