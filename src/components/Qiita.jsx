const Qiita = () => {
    return (
        <div className="qiita">
            <ul className="qiita-top">
                <li className="qiita-title info-title">Qiita</li>
                <li className="qiita-contributions">468 
                    <span>Contributions</span>
                </li>
                <li className="qiita-followers">23
                    <span>Followers</span>
                </li>
            </ul>
            <div className="qiita-subtitile info-subtitle">
                <p>Tags</p>
                <hr/>
            </div>
            <section class="bar-graph bar-graph-horizontal bar-graph-one">
                <div class="bar-one">
                    <div class="bar" data-percentage="Swift"></div>
                    <span class="year">86</span>
                </div>
                <div class="bar-two">
                    <div class="bar" data-percentage="iOS"></div>
                    <span class="year">77</span>
                </div>
                <div class="bar-three">
                    <div class="bar" data-percentage="Xcode"></div>
                    <span class="year">75</span>
                </div>
                <div class="bar-four">
                    <div class="bar" data-percentage="プログラミング"></div>
                    <span class="year">62</span>
                </div>
            </section>
        </div>
    )
};

export default Qiita;