import React from "react";

export const VideoList = (props) => {
    console.log("VideoList props", props);
    return (
        <ul>
            {props.children}
        </ul>
    )
}

export const VideoListItem = () => {
    return (
        <li>Video List Item</li>
    )
}