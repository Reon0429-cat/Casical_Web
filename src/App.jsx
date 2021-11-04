import React from "react";
import "./css/layout.css";
import "./css/reset.css";
import './App.css';
import messageIcon from "./img/message-icon.png"
import logoIcon from "./img/logo.png"
import profile from "./img/profile.png"
import settingIcon from "./img/setting-icon.png"

export const App = () => {
    return (
        <React.Fragment>
            <body className="appear">
                <div id="wrapper">
                    <header id="header" className="fadeDownTrigger">
                        <h1 className="smoothTrigger">
                            <a href="#"><img src={logoIcon} alt=""/></a>
                        </h1>
                        <div className="header-area">
                            <a href="#" className="float3"><img src={settingIcon} alt=""/></a>
                        </div>
                    </header>
                    <div id="container">
                        <main>
                            <div className="full-page">
                                <div className="info">
                                    <div className="upper">
                                        <div className="github">
                                            <ul className="github-top">
                                                <li className="github-title info-title">GitHub</li>
                                                <li className="github-followers">23
                                                    <span>Followers</span>
                                                </li>
                                            </ul>
                                            <div className="github-subtitle info-subtitle">
                                                <p>Contributions</p>
                                                <hr/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lower">
                                        <div className="message">
                                            <img src={messageIcon} alt=""/>
                                            <p>Send Message</p>
                                        </div>
                                        <div className="qiita">
                                            <ul className="qiita-top">
                                                <li className="qiita-title info-title">Qiita</li>
                                                <li className="qiita-contributions">5095
                                                    <span>Contributions</span>
                                                </li>
                                                <li className="qiita-followers">123
                                                    <span>Followers</span>
                                                </li>
                                            </ul>
                                            <div className="qiita-subtitile info-subtitle">
                                                <p>Tags</p>
                                                <hr/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about">
                                    <div className="profile">
                                        <div className="profile-top">
                                            <img src={profile} alt=""/>
                                            <div className="profile-content">
                                                <p className="profile-name">OONISHI REON</p>
                                                <ul className="profile-item">
                                                    <li>●1年</li>
                                                    <li>●東京</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="profile-id">
                                            <p className="github-id">GitHub：Reon0429-cat</p>
                                            <p className="qiita-id">Qiita：REON</p>
                                        </div>
                                        <div className="profile-bio">
                                            <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
                                        </div>
                                    </div>
                                    <div className="skillscore">
                                        <p className="about-title">Skill Score</p>
                                        <div className="chart-area">
                                            <canvas id="skillscore-chart"></canvas>
                                        </div>
                                    </div>
                                    <div className="language">
                                        <p className="about-title">Language
                                            <span>from GitHub</span>
                                        </p>
                                        <div className="chart-area pie">
                                            <canvas id="language-chart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </body>
        </React.Fragment>
    );
};

export default App;