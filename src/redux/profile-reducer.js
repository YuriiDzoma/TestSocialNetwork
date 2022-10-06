const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    arrayPosts: [
        {id: 1, message: 'Hello friend', likesCount: 12},
        {id: 2, message: 'You have training program?', likesCount: 9},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.arrayPosts.length+1,
                message: state.newPostText,
                likesCount: 0,
            };
            state.newPostText = '';
            state.arrayPosts.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});

export default profileReducer;