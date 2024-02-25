import { useSelector } from "react-redux";
import { getTodos, getTotalListQuantity } from "../service/todosSlice";
import TodoBox from "./TodoBox";

function TodoList() {
  const todos = useSelector(getTodos);
  const todosQuantity = useSelector(getTotalListQuantity);

  return (
    <div
      className="w-full flex flex-col items-center gap-[20px] relative transition-[var(--main-transition)]"
    >
      {todosQuantity > 0 &&
        todos.map(todo => (
          <TodoBox todo={todo} key={todo.id}/>
        ))
      }
    </div>
  )
}

export default TodoList