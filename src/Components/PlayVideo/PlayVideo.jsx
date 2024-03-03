import React, { useEffect, useState } from "react";
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);

    const fetchVideoData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
    }

    const fetchChannelData = async () => {
        const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelDetails_url).then(res => res.json()).then(data => setChannelData(data.items[0]));
    }

    useEffect(() => {
        fetchVideoData();
    }, [])

    useEffect(() => {
        fetchChannelData();
    }, [apiData])


    return (
        <div className="play-video">
            {/* <video src={video1} controls autoPlay muted ></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : "?"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "?"} </p>
                <div>
                    <span><img src={like} alt="" />{apiData ? value_converter(apiData.statistics.likeCount) : "?"}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : "Channel's name"}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "haha"} Subscribes</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description : "This is description"}</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : "?"} Comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Lê Phúc Hưng <span>1 day ago</span></h3>
                        <p> Hello world hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>123</span>
                            <img src={dislike} alt="" />
                            <span>2</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Lê Phúc Hưng <span>1 day ago</span></h3>
                        <p> Hello world hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>123</span>
                            <img src={dislike} alt="" />
                            <span>2</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Lê Phúc Hưng <span>1 day ago</span></h3>
                        <p> Hello world hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>123</span>
                            <img src={dislike} alt="" />
                            <span>2</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Lê Phúc Hưng <span>1 day ago</span></h3>
                        <p> Hello world hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>123</span>
                            <img src={dislike} alt="" />
                            <span>2</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Lê Phúc Hưng <span>1 day ago</span></h3>
                        <p> Hello world hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>123</span>
                            <img src={dislike} alt="" />
                            <span>2</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Lê Phúc Hưng <span>1 day ago</span></h3>
                        <p> Hello world hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>123</span>
                            <img src={dislike} alt="" />
                            <span>2</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Lê Phúc Hưng <span>1 day ago</span></h3>
                        <p> Hello world hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>123</span>
                            <img src={dislike} alt="" />
                            <span>2</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Lê Phúc Hưng <span>1 day ago</span></h3>
                        <p> Hello world hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe hehehe</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>123</span>
                            <img src={dislike} alt="" />
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo;
