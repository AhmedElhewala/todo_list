import useGetAllTodos from "../services/useGetAllTodos";

function Progress() {
  const {todos} = useGetAllTodos();
  let doneTasks = 0;
  let progressValue = 0;

  function calcDoneTasks(coppiedTodos) {
    if (!Array.isArray(coppiedTodos)) {
      return 0; 
    }
    return coppiedTodos?.reduce((count, todo) => {
      return todo.done ? count + 1 : count
    }, 0);
  }

  if (todos) {
    doneTasks = calcDoneTasks(todos);
    progressValue = Number((doneTasks / todos.length) * 100).toFixed();
  }

  return (progressValue > 0 ?
    <div
      className={`progress_bar_container mb-10 mx-auto w-[100%] md:w-[80%] lg:w-[60%] flex items-center
      justify-between gap-3 transition-[var(--main-transition)]`}
    >
      <span
        className={`progress_bar_label text-sm font-bold tracking-wide transition-[var(--main-transition)]`}
      >
        Your progress
      </span>
      <div
        className={`progress_bar flex-grow h-2 rounded-md bg-[#bbb] relative transition-[var(--main-transition)]`}
      >
        <span // [var(--color-btn-${progressValue > 60 ? "green" : "red"})]
          className={`progress_bar_fill ${progressValue >= 80 ? "bg-green-500" : progressValue >= 40 ? "bg-yellow-500" : "bg-red-500"} h-full rounded-md 
          absolute top-0 left-0  transition-[var(--main-transition)]`}
          style={{width: `${progressValue}%`}}
        >
          <span
            className={`progress_bar_fill_value bg-[var(--color-grey-700)] text-[var(--color-grey-100)] flex items-center 
            justify-center w-10 h-6 text-xs rounded-[4px] absolute top-[-35px] right-[-20px] transition-[var(--main-transition)]`}
          >
            {progressValue}%
          </span>
        </span>
      </div>
    </div> : null
  )
}

export default Progress