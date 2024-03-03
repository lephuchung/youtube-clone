import React from "react";
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

const Sidebar = ({ sidebar }) => {
    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="shortcut-links">
                <div className="side-link">
                    <img src={home} alt="icon-home" /> <p>Home</p>
                </div>
                <div className="side-link">
                    <img src={game_icon} alt="icon-game" /> <p>Game</p>
                </div>
                <div className="side-link">
                    <img src={automobiles} alt="icon-automobiles" /> <p>Automobiles</p>
                </div>
                <div className="side-link">
                    <img src={sports} alt="icon-sport" /> <p>Sport</p>
                </div>
                <div className="side-link">
                    <img src={entertainment} alt="icon-entertainment" /> <p>Entertainment</p>
                </div>
                <div className="side-link">
                    <img src={tech} alt="icon-tech" /> <p>Technology</p>
                </div>
                <div className="side-link">
                    <img src={news} alt="icon-news" /> <p>News</p>
                </div>
                <div className="side-link">
                    <img src={music} alt="icon-music" /> <p>Music</p>
                </div>
                <div className="side-link">
                    <img src={blogs} alt="icon-blogs" /> <p>Blogs</p>
                </div>
                <hr />
                <div className="subscribed-list">
                    <h3>Subscribed</h3>
                    <div className="side-link">
                        <img src={simon} alt="" /> <p>Simon</p>
                    </div>
                    <div className="side-link">
                        <img src={tom} alt="" /> <p>Tom</p>
                    </div>
                    <div className="side-link">
                        <img src={megan} alt="" /> <p>Megan</p>
                    </div>
                    <div className="side-link">
                        <img src={cameron} alt="" /> <p>Cameron</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;