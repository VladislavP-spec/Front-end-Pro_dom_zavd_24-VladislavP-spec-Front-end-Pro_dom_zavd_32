// const dispathcAndLog = (action) => {
//     console.log('action', action);
//     console.log('before', store.getState());
//     let result = dispatch(action);
//     console.log('after', store.getState())
//     return result;
// }
export const logger = (store) => {
    console.log('store', store);
    return (dispatch) => {
        console.log('dispatch', dispatch);
        return (action) => {
            console.info('before', store.getState());
            console.log('action', action);
            const res = dispatch(action)
            console.info('after', store.getState());
            return res;
        }
    }
}