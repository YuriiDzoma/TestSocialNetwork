import classes from './MyPosts.module.scss';
import Post from './Post/Post';
import React from "react";


const MyPosts = (props) => {
    let postsElements = props.arrayPosts.map( post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.container_posts}>
            <form><div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} />
            </div></form>
            <div><button onClick={onAddPost}>add post</button></div>
            <div className={classes.box_posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;