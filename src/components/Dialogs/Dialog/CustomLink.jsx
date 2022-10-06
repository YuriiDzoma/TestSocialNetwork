import  { Link, useMatch } from "react-router-dom";
import classes from './CustomLink.module.scss';
import classNames from "classnames";

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);

    return (
        <Link
            to={to}
            className={
                classNames(classes.customLink, { [classes.customLink_active]: match })
            }
            {...props}
        >
            {children}
        </Link>
    )
}

export {CustomLink};