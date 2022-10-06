
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    arrayDialogs: [
        {id: 1, name: 'Volodimir', surname: 'Strag', age: 36,
            avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYM9371HTj6KCgJCmNKAV1Mp9rrssce3FJw&usqp=CAU',},
        {id: 2, name: 'Viktor', surname: 'Kolino', age: 21,
            avatarSrc: 'https://pic.rutubelist.ru/user/20/b9/20b9b2d93fb75470b05d9e3316165c7b.jpg'},
        {id: 3, name: 'Taras', surname: 'Figun', age: 54,
            avatarSrc: 'https://icon-library.com/images/icon-avatar/icon-avatar-19.jpg'},
        {id: 4, name: 'Mukola', surname: 'September', age: 37,
            avatarSrc: 'https://b2bconsult.ua/storage/avatars/b/d/5557/conversions/avatar.jpg'},
        {id: 5, name: 'Dasha', surname: 'Vasha', age: 26,
            avatarSrc: 'https://d38we5ntdyxyje.cloudfront.net/1733359/profile/TPGBRBEE_avatar_medium_square.jpg'},
        {id: 6, name: 'Maksim', surname: 'Goga', age: 19,
            avatarSrc: 'https://futsalkyiv.com/static/cache/players/player310_avatar_f5331df750240fd7bf04c01a4aa68a6c.png'},
        {id: 7, name: 'Nataly', surname: 'Kobolt', age: 59,
            avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZldEPvFgz5ysckNAa5ztdf4Exw00bb1a9qA&usqp=CAU'},
    ],
    arrayMessages: [
        {id: 1, message: 'Hi', isSender: false},
        {id: 2, message: 'Where are you?', isSender: false},
        {id: 3, message: 'Hi', isSender: true},
        {id: 4, message: 'I\'m going to your house', isSender: false},
        {id: 5, message: 'I\'m in shop', isSender: true},
        {id: 6, message: 'Wait for me near the house', isSender: true},
        {id: 7, message: 'Ok', isSender: false},
    ],
    newMessageText: '',
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.arrayMessages.length + 1,
                message: state.newMessageText,
                isSender: true,
            };
            state.newMessageText = '';
            state.arrayMessages.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text,});

export default messagesReducer;