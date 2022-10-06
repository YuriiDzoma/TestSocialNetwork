import classes from './Post.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";



const accountAvatar = require('./../../../../assets/img/ava.png');

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.post__avatare}><img src={accountAvatar} alt=''></img></div>
            <span className={classes.post__text}>{props.message}</span>
            <div className={classes.likesBox}>
                <div><button><FontAwesomeIcon className={classes.likesBox__like} icon={faHeart} /></button></div>
                <div><span className={classes.likesBox__counter}>{props.likesCount}</span></div>
            </div>
        </div>
    )
}

export default Post;