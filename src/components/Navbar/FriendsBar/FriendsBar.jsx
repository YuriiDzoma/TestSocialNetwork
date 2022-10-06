import classes from "./FriendsBar.module.scss";

const FriendsBar = (props) => {
    return props.arrayFriends.map(item =>
        (
            <div className={classes.friend} key={item.id}>
                <div className={classes.friend_avatar}><img alt="" src={item.avatarSrc}/></div>
                <p className={classes.friend_name}>{item.name} {item.surname}</p>
            </div>
        )
    )
}



export default FriendsBar;