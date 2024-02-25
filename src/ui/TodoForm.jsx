import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import FormRowItem from "./FormRowItem";
import Modal from "./Modal";
import useModalEffects from "../hooks/useModalEffects"
import { HiOutlineX } from "react-icons/hi";
import { isVaildDeadline } from "../utilities/helpers";
import Spinner from "./Spinner";
import { addTodo, updateTodo } from "../service/todosSlice";

function TodoForm({todo, close, isOpen}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(todo?.title || "");
  const [note, setNote] = useState(todo?.note || "");
  const [deadline, setDeadline] = useState(todo?.deadline || "");
  const [titleError, setTitleError] = useState("");
  const [deadlineError, setDeadlineError] = useState("");
  const formRef = useRef();
  const [isFormLoading, setIsFormLoading] = useState(false);

  useModalEffects(formRef, isOpen, close);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleNoteChange(e) {
    setNote(e.target.value);
  }

  function handleDeadlineChange(e) {
    setDeadline(e.target.value);
  }

  function handleAddTodo() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const createdAt = `${hours}:${minutes}`;

    if (deadline && !isVaildDeadline(deadline)) {
      setDeadlineError("Please! enter a vaild deadline before current time...")
      return;
    }

    const id = Number(Math.random() * 1000).toFixed();

    dispatch(addTodo({id, title, note, deadline, createdAt, done: false}));
  }

  function handleUpdateTodo() {
    dispatch(updateTodo({id: todo.id, title, note, deadline, createdAt: todo.createdAt, done: todo.done}));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsFormLoading(true);

    if (!title) {
      setTitleError("This field is required...")
      return;
    }

    if (todo) {
      handleUpdateTodo()
    } else {
      handleAddTodo();
    }
    
    close();
    setIsFormLoading(false);
  }
  
  return (
    <Modal>
      {isFormLoading && <Spinner />}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className={`todo_form w-[90%] md:w-[70%] lg:w-[50%] rounded-[8px] py-[40px] px-[20px] flex items-center flex-col gap-[20px]
        relative bg-[var(--color-grey-300)] shadow-[0_0_4px_2px_var(--color-grey-500)] transition-[var(--main-transition)]`}
      >
        <span
          onClick={close}
          className="todo_form_close w-7 h-7 rounded-[8px] bg-[var(--color-btn-red)] shadow-[var(--shadow-btn-red)] text-white 
          flex items-center justify-center absolute top-[-14px] right-[-14px] cursor-pointer text-lg"
        >
          <HiOutlineX />
        </span>

        <FormRowItem
          key="todo title"
          label="Title"
          error={titleError}
        >
          <input 
            id="titleInput"
            type="text"
            placeholder="Enter the todo title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="input input_title text-sm"
            disabled={isFormLoading}
          />
        </FormRowItem>

        <FormRowItem
          key="todo note"
          label="Notes"
        >
          <input 
            id="noteInput"
            type="text"
            placeholder="Enter the todo note"
            name="note"
            value={note}
            onChange={handleNoteChange}
            className="input input_note text-sm"
            disabled={isFormLoading}
          />
        </FormRowItem>

        <FormRowItem
          key="todo deadline"
          label="Deadline"
          error={deadlineError}
        >
          <input
            type="time"
            id="deadlineInput"
            name="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
            className="input input_deadline text-sm"
            disabled={isFormLoading}
          />
        </FormRowItem>

        <button
          disabled={isFormLoading}
          type="submit"
          className="button button_submit mt-[10px] bg-[var(--color-btn-green)] shadow-[var(--shadow-btn-green)] text-gray-100"
        >
          {todo ? "Save" : "Add"}
        </button>
      </form>
    </Modal>
  )
}

export default TodoForm