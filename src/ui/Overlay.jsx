import { createPortal } from "react-dom"

function Overlay({children}) {
  return createPortal(
    <div
      className={`overlay w-full h-[100vh] fixed top-0 left-0 bg-[var(--overlay-background)] backdrop-filter-[4px] z-[99999999] transition-[var(--main-transition)]`}
    >
      {children}
    </div>,
    document.body
    )
}

export default Overlay