import { useState } from "react"
import { useSelector } from "react-redux";
import { getTotalListQuantity } from "../service/todosSlice"

import Container from "../ui/Container"
import Heading from "../ui/Heading"
import ThemeBtn from "../ui/ThemeBtn"
import TodoForm from "../ui/TodoForm"
import TodoList from "../ui/TodoList"
import Progress from "../ui/Progress"
import ClearBtn from "../ui/ClearBtn"
import EmptyList from "../ui/EmptyList"
import { HiPlusCircle } from "react-icons/hi"

function Home() {
  const todosQuantity = useSelector(getTotalListQuantity);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleOpenForm() {
    setIsFormOpen(true);
  }

  function handleCloseForm() {
    setIsFormOpen(false);
  }

  return (
    <div className={`home w-full h-full relative pb-5`}>
      <ThemeBtn />
      <Container>
        <Heading />
        <button
          className={`min-w-[240px] px-5 py-2 rounded-lg border-none outline-none bg-[var(--color-btn-green)] flex items-center
          justify-center gap-2 mx-auto mt-10 mb-[50px] cursor-pointer text-lg font-bold transition-[var(--main-transition)]`}
          onClick={handleOpenForm}
        >
          <HiPlusCircle />
          <span
            className={`text-base`}
          >
            Add task
          </span>
        </button>
        <Progress />
        {todosQuantity > 0 ?
          <>
            <TodoList />
            <ClearBtn />
          </> :
          <EmptyList />
        }
      </Container>
      {isFormOpen &&
        <TodoForm
          isOpen={isFormOpen}
          close={handleCloseForm}
        />
      }
    </div>
  )
}

export default Home