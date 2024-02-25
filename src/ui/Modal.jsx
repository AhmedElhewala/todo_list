import Overlay from "./Overlay"

function Modal({children}) {
  return (
    <Overlay>
      <div
        className={`modal_window w-full h-[100vh] fixed text-white flex items-center justify-center 
        overflow-y-auto scrollbar-none transition-[var(--main-transition)]`}
      >
        {children}
      </div>
    </Overlay>
  )
}

export default Modal