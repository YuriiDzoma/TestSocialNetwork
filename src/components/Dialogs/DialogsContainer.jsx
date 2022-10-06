import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


const mapDialogsToProps = (state) => {
    return {
        arrayDialogs: state.messagesPage.arrayDialogs
    }
}

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        arrayMessages: state.messagesPage.arrayMessages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: ()=> {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (text)=> {
            dispatch(onMessageChangeActionCreator(text));
        },
    }
}

const DialogsContainer = connect(mapDialogsToProps, mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
