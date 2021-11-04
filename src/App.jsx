import React from "react";
import "./css/layout.css";
import "./css/reset.css";
import './App.css';

import Header from "./components/Header"
import GitHub from "./components/GitHub";
import Qiita from "./components/Qiita";
import Profile from "./components/Profile";
import SkillScore from "./components/SkillScore";
import Language from "./components/Language";
import SendMessage from "./components/SendMessage";

export const App = () => {
    return (
        <React.Fragment>
            <body className="appear">
                <div id="wrapper">
                  <Header/>
                    <div id="container">
                        <main>
                            <div className="full-page">
                                <div className="info">
                                    <div className="upper">
                                        <GitHub/>
                                    </div>
                                    <div className="lower">
                                      <SendMessage/>
                                        <Qiita/>
                                    </div>
                                </div>
                                <div className="about">
                                  <Profile/>
                                    <SkillScore/>
                                    <Language/>
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