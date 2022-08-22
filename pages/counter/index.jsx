import Responsive from "../../src/components/common/responsive";
import { useSelector, useDispatch } from "react-redux";
// import {UP,DOWN} from "../../src/reducers"

const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state); // 전역상태에 있는 state를 가져와서 counter에 담는 코드

  const onUp = () => {
    dispatch({ type: "UP" });
  };

  const onDown = () => {
    dispatch({ type: "DOWN" });
  };

  return (
    <>
      <Responsive>
        <h3>Counter : {counter.number}</h3>
        <button onClick={onUp}>+1</button>
        <button onClick={onDown}>-1</button>
        <h4>개별페이지 별점주기</h4>
      </Responsive>
    </>
  );
};

export default Counter;
