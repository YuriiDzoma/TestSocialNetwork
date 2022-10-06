import classes from './Chat.module.scss';
import {faArrowTurnUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const Chat = (props) => {
    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (element) => {
        let text = element.target.value;
        props.onMessageChange(text)
    };

    let Messages = props.arrayMessages.map(item =>
        <div key={item.id} className={(classNames(classes.message, {[classes.message_sender]: item.isSender}))}>
            <span>{item.message}</span>
        </div>)

    return (
        <div className={classes.communication__messages}>
            {Messages}
            <div className={classes.writeMessage}>
                <div className={classes.writeMessage__area}>
                    <textarea onChange={onMessageChange} value={props.newMessageText}></textarea>
                </div>
                <div className={classes.writeMessage__button}>
                    <button onClick={onAddMessage}>
                        <FontAwesomeIcon icon={faArrowTurnUp}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chat;