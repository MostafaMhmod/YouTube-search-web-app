import React from 'react';

function VideoList(props) {
    // console.log(props);

    return (
        <div>
            <ul className="video-list">
                {props.videos.map((video, i) =>
                    <li onClick={props.selectVideo.bind(null, video)} key={i}>
                        <div className="image-container">
                            <img className="video-img" src={video.snippet.thumbnails.medium.url} alt=""/>
                        </div>
                        <h6>{video.snippet.title}</h6>
                    </li>)}
            </ul>
        </div>
    )

}

export default VideoList;


// onClick={this.setState({activeVideo: {
//     id: props.videos[i].id.videoId,
//     title: props.videos[i].snippet.title,
//     channelTitle: props.videos[i].snippet.channelTitle,
//     description : props.videos[i].snippet.description
// }})}