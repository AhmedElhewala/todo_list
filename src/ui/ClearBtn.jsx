import { useState } from "react";
import { useDispatch } from "react-redux";
import { HiTrash } from "react-icons/hi"
import { clearList } from "../service/todosSlice";

function ClearBtn() {
  const dispatch = useDispatch();
  const [isClearing, setIsClearing] = useState(false);
  const [, setConfirmClearing] = useState(false);
  const [, setCancelClearing] = useState(false);
  
  function handleClickClear() {
    setConfirmClearing(false);
    setCancelClearing(false);
    setIsClearing(true);
  }

  function handleConfirmClear() {
    dispatch(clearList());
    setConfirmClearing(true);
    setIsClearing(false);
  }

  function handleCancelClear() {
    setCancelClearing(true);
    setIsClearing(false);
  }

  return (
    isClearing ? (
      <div
        className={`clear_btns_container mt-10 mb-[50px] mx-auto w-[100%] md:w-[80%] lg:w-[60%] flex items-center justify-between gap-5 transition-[var(--main-transition)] flex-wrap`}
      >
        <button
          onClick={handleConfirmClear}
          className={`confirm_btn flex-grow px-5 py-2 rounded-lg border-none outline-none bg-[var(--color-btn-red)] shadow-[var(--shadow-btn-red)] flex items-center justify-center transition-[var(--main-transition)] text-base font-bold cursor-pointer`}
        >
          Confirm
        </button>
        <button
          onClick={handleCancelClear}
          className={`cancel_btn flex-grow px-5 py-2 rounded-lg border-none outline-none bg-[var(--color-btn-green)] shadow-[var(--shadow-btn-green)] flex items-center justify-center transition-[var(--main-transition)] text-base font-bold cursor-pointer`}
        >
          Cancel
        </button>
      </div>
    ) : (
      <button
        onClick={handleClickClear}
        className={`min-w-[240px] px-5 py-2 rounded-lg border-none outline-none bg-[var(--color-btn-red)] flex items-center
        justify-center gap-2 mx-auto mt-10 mb-[50px] cursor-pointer text-base font-bold transition-[var(--main-transition)]`}
      >
        <HiTrash className="text-lg" />
        Clear
      </button>
    )
  )
}

export default ClearBtn