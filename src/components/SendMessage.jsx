import messageIcon from "../img/message-icon.png"

const SendMessage = () => {
    return (
        <div className="message">
            <img src={messageIcon} alt=""/>
            <p>Send Message</p>
        </div>
    );
};

export default SendMessage;