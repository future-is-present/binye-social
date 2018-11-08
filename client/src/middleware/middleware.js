export default function createSlimAsyncMiddleware({
    dispatch,
    getState
}) {
    return next => action => {
        const {
            types,
            callAPI,
            shouldCallAPI = () => true,
        } = action;
        if (!actionIsValid(action)) next(action);
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

function actionIsValid(action) {
    return true
}