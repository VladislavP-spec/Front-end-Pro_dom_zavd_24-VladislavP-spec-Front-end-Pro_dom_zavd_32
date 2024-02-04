import slice from "./slice.js";

const getData = (arg) => {
    console.log(arg) // undefined
    return (dispatch) => {
        const data = JSON.parse(localStorage.getItem('items'));
        dispatch(slice.actions.setItems(data))
        dispatch(slice.actions.setLoading(false))
    }
}
const setData = (event, items) => {
    return (dispatch) => {
        event.preventDefault();
        dispatch(slice.actions.setLoading(true))
        setTimeout(() => {
            dispatch(slice.actions.addItem(event.target.text_input.value))
            dispatch(slice.actions.setLoading(false))
        }, 3000)
        localStorage.setItem('items', JSON.stringify([...items, event.target.text_input.value]))
    }
}

export {
    getData,
    setData
}