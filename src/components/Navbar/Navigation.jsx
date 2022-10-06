import {CustomLink} from "./CustomLink";


const Navigation = (props) => {
    return props.arrayNavigation.map(item =>
        (
            <li key={item.id}><CustomLink to={item.url}>{item.title}</CustomLink></li>
        )
    )
}

export default Navigation;
