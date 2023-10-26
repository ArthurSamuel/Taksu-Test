import { useDispatch } from "react-redux";
import { addTodoReducer } from "../../../../../store/User/User";

const useAddTodo = () => {
  const dispatch = useDispatch();

  const addTodo = ({ title, date }: { title: string; date: string }) => {
    dispatch(
      addTodoReducer({ title, date, type: "open", id: Math.random() * 10000 })
    );
  };

  return {
    addTodo,
  };
};

export default useAddTodo;
