import React from "react"
import Header from './Header'
import { useDispatch, useSelector } from "react-redux";

const Cash = () => {
    const dispatch = useDispatch();

    const cash = useSelector((state) => state.cashReducer.cash);
    const counter = useSelector((state) => state.webReducer.counter);

    function addCash(cash) {
        dispatch({ type: "ADD_CASH", payload: cash });
      }
    
      function getCash(cash) {
        // payload: cash - это вводимое число
        dispatch({ type: "GET_CASH", payload: cash });
      }
      function addCounter(counter) {
        // payload: counter - это вводимое число из prompt
        dispatch({ type: "ADD_COUNTER", payload: counter });
      }
    
      function restartCounter(counter) {
        // payload: counter - это вводимое число
        dispatch({ type: "RESTART_COUNTER", payload: counter });
      }
    
      function multiplyCounter(counter) {
        // payload: counter - это вводимое число
        dispatch({ type: "MULTIPLY_COUNTER", payload: counter });
      }
    
      function divideCounter(counter) {
        dispatch({ type: "DIVIDE_COUNTER", payload: counter });
      }
    return(
        <div>
            <Header />
            <div className="cash-boss-super-btn">
            <h2>
          Денег на счету: <strong>{cash}</strong>
        </h2>
            <button className="cash-btn" onClick={() => addCash(+prompt())}>put the cash</button>
            <button className="cash-btn" onClick={() => getCash(Number(+prompt()))}>get the cash</button>
            <div>
          <h1> {counter}</h1>

          {/* Стрелочная функция ОБЯЗАТЕЛЬНАЯ */}
        </div>
        <button className="cash-btn" onClick={() => addCounter(+prompt())}>
          {" "}
          Увеличить счетчик
        </button>
        <button className="cash-btn" onClick={() => restartCounter()}> Обнулить счетчик</button>
        <button className="cash-btn" onClick={() => multiplyCounter()}> Умножить счетчик</button>
        <button className="cash-btn" onClick={() => divideCounter(+prompt())}>
          {" "}
          Поделить счетчик
        </button>
        </div>
        </div>
    )
}

export default Cash