import radarChart from "../img/radarChart.png"

const SkillScore = () => {
    return (
        <div className="skillscore">
            <p className="about-title">Skill Score</p>
            <div className="chart-area">
                <img src={radarChart} alt="" />
                <p>6.3 <span>points</span></p>
            </div>
        </div>
    );
}

export default SkillScore;