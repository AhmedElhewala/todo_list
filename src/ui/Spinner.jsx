import Overlay from "./Overlay"

function Spinner() {
  return (
    <Overlay>
      <div
        className="spinner_container w-full h-full flex justify-center items-center z-[9999999999]"
      >
        <div
          className={`spinner relative`}
        >
        </div>
      </div>
    </Overlay>
  )
}

export default Spinner