import React from 'react';

function VideoPreview(props) {
    // console.log(props);
    // console.log(props.activeVideo.id=="")

    // if(props.activeVideo.id!=="")

    if (props.activeVideo.id=="")
    {
        return <h2>Player</h2>
    }

    else {
        return (
            <div className="videoWrapper">
                <iframe width="860" height="450" src={"https://www.youtube.com/embed/" + props.activeVideo.id}
                        frameBorder="0" allowFullScreen/>
                <h4>{props.activeVideo.title}</h4>
                <h5>{props.activeVideo.channelTitle}</h5>
                <p>{props.activeVideo.description}.</p>
            </div>
        )
    }
}

export default VideoPreview;
//props.activeVideo.id