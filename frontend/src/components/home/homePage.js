import React from "react";

function homePage(){
    return (
        <div style={{height:"684px", margin: "0px 10px"}}>
            <video src="https://video.wixstatic.com/video/7bd5ba_23067a2f5b53433ab2e48eba10b20d9e/720p/mp4/file.mp4" 
            role="presentation"
            crossorigin="anonymous"
            playsinline
            preload="auto"
            muted
            loop
            tabindex="-1"
            autoplay
            controls
            style={{height: "100% ", width: "100%", objectFit: "cover", objectPosition: "center center", opacity: "1" }}
            ></video>
        </div>
    )
};

export default homePage