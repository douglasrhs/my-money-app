const userKey = '_mymoney_user'
const INITIAL_STATE = {
    registerMode: false,
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if(action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload,
                validToken: true, registerMode: false }
        case 'REGISTER_MODE_CHANGED':
            return { ...state, registerMode: action.payload }
        default:
            return state
    }
}