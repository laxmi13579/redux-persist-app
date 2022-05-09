import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../reducers/counterSlice";

const Counter = () => {
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    console.log(count);
    return (
        <>
        <button onClick={()=>dispatch(increment())}>Increase</button>
        count: {count}
        <button onClick={()=>dispatch(decrement())}>Decrease</button>
        </>
    )
}
export default Counter;  