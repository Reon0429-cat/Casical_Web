import profile from "../img/profile.png"

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-top">
                <img src={profile} alt=""/>
                <div className="profile-content">
                    <p className="profile-name">OONISHI REON</p>
                    <ul className="profile-item">
                        <li>●1年1ヶ月</li>
                        <li>●東京</li>
                    </ul>
                </div>
            </div>
            <div className="profile-id">
                <p className="github-id">GitHub：Reon0429-cat</p>
                <p className="qiita-id">Qiita：REON</p>
            </div>
            <div className="profile-bio">
                <p> iOSエンジニア志望 <br/> 🎓都内の大学生です！</p>
            </div>
        </div>
    );
}

export default Profile;