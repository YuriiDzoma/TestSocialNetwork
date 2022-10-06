import classes from './Dialogs.module.scss';
import {Dialog} from "./Dialog/Dialog";

import Chat from "./Chat/Chat";


const Dialogs = (props) => {
    return (
        <div className={classes.communication}>
            <div>
                <Dialog arrayDialogs={props.messagesPage.arrayDialogs}/>
            </div>
            <Chat
                addMessage={props.addMessage}
                onMessageChange={props.onMessageChange}
                newMessageText={props.messagesPage.newMessageText}
                arrayMessages={props.messagesPage.arrayMessages}/>
        </div>
    )
}
export default Dialogs;
