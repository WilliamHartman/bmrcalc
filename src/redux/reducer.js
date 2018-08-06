const initialState = {
    user: {},
    currentPage: 'home'
}

const GET_USER_DATA = 'GET_USER_DATA'; 


export function getUserData(user){
    return {
        type: GET_USER_DATA,
        payload: user
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
            return Object.assign({}, state, { user: action.payload });
        default:
            return state;
    }
}