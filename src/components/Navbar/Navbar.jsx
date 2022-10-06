import classes from './Navbar.module.scss';
import {CustomLink} from "./CustomLink";
import Navigation from "./Navigation";
import FriendsBar from "./FriendsBar/FriendsBar";


const Navbar = (props) => {
    return (
        <nav className={classes.navigation}>
            <ul>
                <Navigation arrayNavigation={props.state.arrayNavigation} />
                <li>
                    <CustomLink to='my_friends/*'>My Friends</CustomLink>
                    <div className={classes.friend_bar}>
                        <FriendsBar arrayFriends={props.state.arrayFriends} />
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
