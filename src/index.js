import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import VideoList from './VideoList';
import VideoPreview from './VideoPreview';

import './index.css';

/* API information */

const API_KEY = "AIzaSyCc0I9y_j3bifYXxItnNjHLqqy2Dq2DPVk";

const API_URL = 'https://www.googleapis.com/youtube/v3/search';

let params = {
    part: 'snippet',
    key: API_KEY,
    q: "",
    type: 'video',
    maxResults: 20
};

/******************/


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            activeVideo: {
                id: "",
                title: "",
                channelTitle: "",
                description: ""

            }
        }

        this.searchVideos = this.searchVideos.bind(this);
    }

    searchVideos(event) {
        event.preventDefault();
        let keyword = this.refs.keyword.value;
        params.q = keyword;

        axios.get(API_URL, {params: params}).then(response => {
            console.log(response.data.items[0])
            // console.log(response.data.items[0].id.videoId)
            this.setState({
                videos: response.data.items,
                activeVideo: {
                    id: response.data.items[0].id.videoId,
                    title: response.data.items[0].snippet.title,
                    channelTitle: response.data.items[0].snippet.channelTitle,
                    description : response.data.items[0].snippet.description
                }
            });
        });
    }

    setVideo(video) {
        this.setState({activeVideo:{
            id: video.id.videoId,
            title: video.snippet.title,
            channelTitle: video.snippet.channelTitle,
            description : video.snippet.description

        }});

    }

    render() {
        return (
            <div>
                <div className="nav">
                    <img src={"img/logo.png"} className="logo"/>
                    <form onSubmit={this.searchVideos}>
                        <input ref="keyword" type="text"/>
                    </form>

                </div>

                <div className="content">
                    <div className="main">
                        {/*<h1>Player</h1>*/}
                        <VideoPreview activeVideo={this.state.activeVideo}/>
                    </div>
                    <div className="sidebar">
                        <VideoList selectVideo={this.setVideo.bind(this)} videos={this.state.videos}/>
                    </div>
                </div>

            </div>
        )
    }
}


ReactDOM.render(<App></App>, document.getElementById('root'));


