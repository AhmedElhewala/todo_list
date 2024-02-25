import { useRef } from "react";
import { useDispatch } from "react-redux";
import useOutsideClose from "../hooks/useOutsideClose";
import { deleteTodo, toggleTodoStatus } from "../service/todosSlice";

function OptionsMenu({todo, close, handleOpenForm}) {
  const dispatch = useDispatch();
  const menuRef = useRef();
  const {id, done} = todo;

  useOutsideClose(menuRef, close, true);

  function handleToggleStatus() {
    dispatch(toggleTodoStatus({id, done: !done}))
  }

  function handleDeleteTodo() {
    dispatch(deleteTodo(id));
  }

  return (
    <>
      <div
        ref={menuRef}
        className={`todo-box-menu p-3 rounded-lg bg-[var(--color-grey-100)] text-[var(--color-grey-800)] text-sm 
        flex flex-col gap-2 absolute z-40 top-6 right-6 min-w-32 transition-[var(--main-transition)]`}
      >
        <span
          onClick={handleToggleStatus}
          className="cursor-pointer"
        >
          mark as {done ? "not done" : "done"}
        </span>
        <span
          onClick={handleOpenForm}
          className="cursor-pointer"
        >
          Edit
        </span>
        <span
          onClick={handleDeleteTodo}
          className="cursor-pointer"
        >
          Delete
        </span>
      </div>
    </>
  )
}

export default OptionsMenu