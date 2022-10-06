import navigationReducer from "./navigation-reducer";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let store = {
    _state: {
        header: {},
        navigation: {
            arrayNavigation: [
                {title: 'Profile', url: 'profile/*', id: 1},
                {title: 'Messages', url: 'messages/*', id: 2},
                // {title: 'My Friends', url: 'my_friends/*', id: 3, class: 'my_friends'},
                {title: 'My Training', url: 'my_training/*', id: 3},
                {title: 'Music', url: 'music/*', id: 4},
                {title: 'Video', url: 'video/*', id: 5},
                {title: 'Settings', url: 'settings/*', id: 6},
            ],
        },
        content: {
            profilePage: {
                arrayPosts: [
                    {id: 1, message: 'Hello friend', likesCount: 12},
                    {id: 2, message: 'You have training program?', likesCount: 9},
                ],
                newPostText: '',
            },
            messagesPage: {
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
            },
        },
        footer: {},
        arrayFriends: [
            {id: 1, name: 'Volodimir', surname: 'Strag', avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYM9371HTj6KCgJCmNKAV1Mp9rrssce3FJw&usqp=CAU'},
            {id: 2, name: 'Taras', surname: 'Figun', avatarSrc: 'https://icon-library.com/images/icon-avatar/icon-avatar-19.jpg'},
            {id: 3, name: 'Nataly', surname: 'Kobolt', avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZldEPvFgz5ysckNAa5ztdf4Exw00bb1a9qA&usqp=CAU'},
        ],
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.navigation = navigationReducer(this._state.navigation, action);
        this._state.content.profilePage = profileReducer(this._state.content.profilePage, action);
        this._state.content.messagesPage = messagesReducer(this._state.content.messagesPage, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;
