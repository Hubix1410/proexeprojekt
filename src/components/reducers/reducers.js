const initialstate = { users: "none" };

const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'INITIAL':
            return {
                ...state, users: action.data
            }

        case 'REMOVEUSER':
            let removeUserState = state.users;
            removeUserState.splice(action.index, 1)
            removeUserState.forEach((element,index) => {
                element.id = index + 1;
            });
            return {
                ...state, users: removeUserState
            }

        case 'ADDUSER':
            let addUserState = state.users
            addUserState.push(action.user)
            addUserState.forEach((element,index) => {
                element.id = index + 1;
            });
            return {
                ...state, users: addUserState
            }

        case 'EDITUSER':
            let editUserState = state.users;
            editUserState[action.index] = action.user;
            console.log(editUserState);
            return {
                ...state, users: editUserState
            }

        default:
            return state;
    }
}

export default userReducer;