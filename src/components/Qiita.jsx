const Qiita = () => {
    return (
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
    )
};

export default Qiita;