import {useSelector, useDispatch} from "react-redux";
import selectors from "../../engine/todo/selectors.js";
import slice from "../../engine/todo/slice.js";
import {store} from "../../shared/store.js";

export function Footer() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch();
    const itemCount = items ? items.length : 0;

    const onClear = () => {
        const payload = [];
        dispatch(slice.actions.setItems(payload))
    }
    return (
        <div className="d-flex justify-content-between">
            <span>Count: {itemCount}</span>
            <button onClick={onClear}>Clear</button>
        </div>
    )
}