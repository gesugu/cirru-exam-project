const defaultState = {
    counter: 0,
  };
  //   Функция, которая принимает текущее состояние и экшен и возвращает новое состояние.
  export const webReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_COUNTER":
        // state.cash это предыдущее значение
        // action.payload это добавляемое или снимаемое значение , действие пользователя
        // Возвращаем новый state с измененным cash
        return { ...state, counter: state.counter + action.payload };
      case "RESTART_COUNTER":
        return { ...state, counter: 0 };
      case "MULTIPLY_COUNTER":
        return { ...state, counter: state.counter * state.counter };
      case "DIVIDE_COUNTER":
        return { ...state, counter: state.counter / action.payload };
      default:
        return state;
    }
  };
  