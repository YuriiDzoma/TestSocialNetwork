import classes from "./ProfileInfo.module.scss"

const ProfileInfo = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.profile__logo}><img alt="" src='https://image.shutterstock.com/image-vector/beard-gentle-man-logo-vector-260nw-1537836113.jpg'></img></div>
            <p className={classes.profile__name}>Ponos Mirnuy</p>
        </div>
    )
}

export default ProfileInfo;