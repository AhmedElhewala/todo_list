import { HiDotsVertical, HiOutlineCheck, HiOutlineExclamation } from "react-icons/hi"
import { CgSandClock } from "react-icons/cg";
import { useState } from "react";
import OptionsMenu from "./OptionsMenu";
import { checkIsMissingDeadline, formatTime } from "../utilities/helpers";
import TodoForm from "./TodoForm";

function TodoBox({todo}) {
  const {title, note, deadline, createdAt, done} = todo;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMissedDeadline = checkIsMissingDeadline(deadline);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleOpenForm() {
    setIsFormOpen(true);
  }

  function handleCloseForm() {
    setIsFormOpen(false);
  }

  function toggleMenuOpen() {
    setIsMenuOpen(open => !open)
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div
      className={`todo_box w-[100%] md:w-[80%] lg:w-[60%] rounded-[8px] p-[20px] flex flex-col gap-[30px] relative
      ${done ? "bg-[var(--color-grey-300)] shadow-[0_0_4px_0_var(--color-grey-500)]" : "bg-[var(--color-grey-200)] shadow-[0_0_4px_1px_var(--color-grey-500)]"} transition-[var(--main-transition)]`}
    >
      <div
        className={`todo-box-top w-full flex justify-between gap-[30px] relative transition-[var(--main-transition)] ${done && "text-[var(--color-grey-700)]"}`}
      >
        <div
          className={`todo_box_details_container flex-grow flex flex-col justify-between gap-[30px] relative ml-3 transition-[var(--main-transition)]`}
        >
          <h3
            className={`todo_box_details_title relative font-bold text-lg transition-[var(--main-transition)] ${done && "line-through"}`}
          >
            {title}
          </h3>
          <span
            className={`todo_box_details_note relative text-xs text-[var(--color-grey-700)] transition-[var(--main-transition)]`}
          >
            {note}
          </span>
        </div>
        <div
          className={`todo_box_settings_container flex flex-col justify-between items-end gap-[30px] relative`}
        >
          <div
            className={`todo_box_settings_icon flex items-center justify-between relative w-6 h-6 text-base cursor-pointer`}
            onClick={toggleMenuOpen}
          >
            <HiDotsVertical />
          </div>
          <div
            className={`todo_box_settings_time text-xs font-bold`}
          >
            {formatTime(createdAt)}
          </div>
        </div>

        {isMenuOpen &&
          <OptionsMenu 
            isOpen={isMenuOpen}
            close={handleCloseMenu}
            todo={todo}
            handleOpenForm={handleOpenForm}
          />
        }
      </div>

      <div
        className={`todo_box_status_container flex justify-between items-center gap-5 relative`}
      >
        <div
          className={`todo_box_status_icon flex-grow flex items-center justify-start gap-3 relative text-xl`}
        >
          {done ?
            <>
              <HiOutlineCheck 
                className={`text-green-500`}
              />
              <span
                className={`todo_box_status_note text-sm text-green-500`}
              >
                You successfully did this task 🥳
              </span>
            </> :
            deadline ? (
              isMissedDeadline ?
                <>
                  <HiOutlineExclamation
                    className={`text-red-400`}
                  />
                  <span
                    className={`todo_box_status_note text-sm text-red-400`}
                  >
                    You missed this task deadline
                  </span>
                </> : 
                <>
                  <CgSandClock 
                    className={`text-yellow-500`}
                  />
                  <span
                    className={`todo_box_status_note text-sm text-yellow-500`}
                  >
                    You are doing this task
                  </span>
                </>
            ) : (
              <>
                <CgSandClock 
                    className={`text-yellow-500`}
                  />
                  <span
                    className={`todo_box_status_note text-sm text-yellow-500`}
                  >
                    You are doing this task
                  </span>
              </>
            )
          }
        </div>
        {deadline &&
          <div
            className={`todo_box_status_deadline text-xs flex items-center gap-2`}
          >
            Deadline:
            <span
              className={`font-bold`}
            >
              {formatTime(deadline)}
            </span>
          </div>
        }
      </div>
      {isFormOpen &&
        <TodoForm
          todo={todo}
          close={handleCloseForm}
        />
      }
    </div>
  )
}

export default TodoBox