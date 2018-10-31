const initialState = {
    name: null,
    origin: null,
    password: null,
    
    address: {
        postcode: null,
        city: null
    }
}

const identity = (state = initialState, action) => {
    switch (action.type) {
        case 'GENERATE_PROFILE':
            return Object.assign({}, state, {
                password: action.password,
                name: action.name,

            })
        case 'SET_ADDRESS':
            return Object.assign({}, state, {
                name: null,
                address: {
                    postcode: action.postcode,
                    city: action.city
                }
            })
        case 'SHOW_PROFILE':
        console.log('Triggered show profile')
            return state
        default:
            console.log('Triggered the default mode of the reducer. Identity.js')
            return state
    }
}

export default identity