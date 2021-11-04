const Header = (props) => {
    const {logoIcon, settingIcon} = props;
    return (
        <header id="header" className="fadeDownTrigger">
            <h1 className="smoothTrigger">
                <a href="#"><img src={logoIcon} alt=""/></a>
            </h1>
            <div className="header-area">
                <a href="#" className="float3"><img src={settingIcon} alt=""/></a>
            </div>
        </header>
    );
};

export default Header;