import { authReducer } from "./auth-reducer";

export const fetchWorkerRegister = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => dispatch(authReducer(json)));
  };
};
