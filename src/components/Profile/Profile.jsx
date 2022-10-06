import classes from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const contentPicture = require('./../../assets/img/sport-pic.png');

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.content__picture}><img alt="" src={contentPicture}></img></div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;