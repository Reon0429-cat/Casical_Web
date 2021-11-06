import pieChart from "../img/pie-chart.png"

const Language = () => {
    return (
        <div className="language">
            <p className="about-title">Language
                <span>from GitHub</span>
            </p>
            <div className="chart-area pie">
                <img src={pieChart} alt="" />
                <div className="percentage">
                    <p><span>●</span>Swift 94%</p>
                    <p><span>●</span>JavaScript 3%</p>
                    <p><span>●</span>others 2%</p>
                </div>
            </div>
        </div>
    );
}

export default Language;