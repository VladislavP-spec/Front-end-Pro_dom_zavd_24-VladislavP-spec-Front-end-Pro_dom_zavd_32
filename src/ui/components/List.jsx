import {useDispatch, useSelector} from "react-redux";
import {ListItem} from "./ListItem.jsx";
import selectors from "../../engine/todo/selectors.js";
import { getData } from "../../engine/todo/thunks.js";
import {useEffect} from "react";
import slice from "../../engine/todo/slice.js";


export function List() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, []);
    return (
        <>
            <br/>
            <h1>Todos</h1>
            {
                !items || items.length === 0
                    ? <span>No data</span>
                    : (
                        <ul className="list">
                            {items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
                        </ul>
                    )
            }
        </>
    )
}