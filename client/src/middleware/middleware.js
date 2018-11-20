export default function createSlimAsyncMiddleware({
    dispatch,
    getState
}) {
    return next => action => {
        const {
            types,
            type,
            callAPI,
            shouldCallAPI = () => true,
        } = action;
        
        if (typeof types === 'undefined') next(action);
        if (shouldCallAPI(getState())) {
            return Promise.resolve(getState());
        }
        const [pendingType, successType, errorType] = types;
        dispatch({
            type: pendingType
        });
        return callAPI()
            .then(response => {
                next({
                    type: successType,
                    payload: response,
                });
                return Promise.resolve(getState());
            })
            .catch(error => {
                next({
                    type: errorType,
                    payload: error,
                });
                return Promise.reject(error);
            });
    };
}

function actionIsValid(types) {
    console.log('action', types)

    if(types === 'GENERATE_PROFILE'){
        return false
    }
    return true
}