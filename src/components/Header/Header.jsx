import classes from "./Header.module.scss";

const headerLogo = require('./../../assets/img/logo.png');

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__logo}><img src={headerLogo}></img></div>
            <h2 className={classes.header__title}>Family of Sport</h2>
        </header>
    )
}

export default Header;