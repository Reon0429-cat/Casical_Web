const Language = () => {
    return (
        <div className="language">
            <p className="about-title">Language
                <span>from GitHub</span>
            </p>
            <div className="chart-area pie">
                <canvas id="language-chart"></canvas>
            </div>
        </div>
    );
}

export default Language;