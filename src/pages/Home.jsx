import { HiPlusCircle } from "react-icons/hi"
import Container from "../ui/Container"
import Heading from "../ui/Heading"
import ThemeBtn from "../ui/ThemeBtn"
import { useState } from "react"
import TodoForm from "../ui/TodoForm"
import TodoList from "../ui/TodoList"
import Progress from "../ui/Progress"
import ClearBtn from "../ui/ClearBtn"
import useGetAllTodos from "../services/useGetAllTodos"
import Spinner from "../ui/Spinner"
import EmptyList from "../ui/EmptyList"

function Home() {
  const {isLoading, todos} = useGetAllTodos();
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleOpenForm() {
    setIsFormOpen(true);
  }

  function handleCloseForm() {
    setIsFormOpen(false);
  }

  if (isLoading) return <Spinner />

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
        {todos?.length > 0 ?
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