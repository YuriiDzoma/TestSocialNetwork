
let initialState = {
    arrayNavigation: [
        {title: 'Profile', url: 'profile/*', id: 1},
        {title: 'Messages', url: 'messages/*', id: 2},
        // {title: 'My Friends', url: 'my_friends/*', id: 3, class: 'my_friends'},
        {title: 'My Training', url: 'my_training/*', id: 3},
        {title: 'Music', url: 'music/*', id: 4},
        {title: 'Video', url: 'video/*', id: 5},
        {title: 'Settings', url: 'settings/*', id: 6},
    ],
    arrayFriends: [
        {id: 1, name: 'Volodimir', surname: 'Strag', avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYM9371HTj6KCgJCmNKAV1Mp9rrssce3FJw&usqp=CAU'},
        {id: 2, name: 'Taras', surname: 'Figun', avatarSrc: 'https://icon-library.com/images/icon-avatar/icon-avatar-19.jpg'},
        {id: 3, name: 'Nataly', surname: 'Kobolt', avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZldEPvFgz5ysckNAa5ztdf4Exw00bb1a9qA&usqp=CAU'},
    ],
}

const navigationReducer = (state = initialState, action) => {
    return state;
}

export default navigationReducer;

