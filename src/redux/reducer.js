const initialState = {
    user: {
        units: 'imperial',
        gender: 'female',
        weight: '',
        height: '',
        feet: '',
        inches: '',
        age: '',
        bodyFat: '',
        activityLevel: 0
    },
    currentPage: 'home'
}

const UPDATE_USER_DATA = 'UPDATE_USER_DATA'; 
const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

export function updateUserData(user){
    return {
        type: UPDATE_USER_DATA,
        payload: user
    }
}

export function updateCurrentPage(newPage){
    return {
        type: UPDATE_CURRENT_PAGE,
        payload: newPage
    }
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case UPDATE_USER_DATA:
            return Object.assign({}, state, { user: action.payload });
        case UPDATE_CURRENT_PAGE:
            return Object.assign({}, state, { currentPage: action.payload });
        default:
            return state;
    }
}