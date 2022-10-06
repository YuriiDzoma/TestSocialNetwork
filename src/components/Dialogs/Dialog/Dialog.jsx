import classes from "./Dialog.module.scss"
import {CustomLink} from "./CustomLink";

const Dialog = (props) => {
    return props.arrayDialogs.map( dialog =>  (
            <div key={dialog.id} className={classes.dialog}>
                <div><img alt='' src={dialog.avatarSrc} /></div>
                <CustomLink to={`${/messages/}${dialog.id}`}>{dialog.name} {dialog.surname}</CustomLink>
            </div>
        )
    )
}

export {Dialog};