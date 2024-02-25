import useGetAllTodos from "../services/useGetAllTodos";
import Spinner from "./Spinner";
import TodoBox from "./TodoBox";

function TodoList() {
  const {isLoading, todos} = useGetAllTodos();

  if (isLoading) return <Spinner />

  return (
    <div
      className="w-full flex flex-col items-center gap-[20px] relative transition-[var(--main-transition)]"
    >
      {todos.length > 0 &&
        todos.map(todo => (
          <TodoBox todo={todo} key={todo.id}/>
        ))
      }
    </div>
  )
}

export default TodoList