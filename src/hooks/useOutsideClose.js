import { useEffect } from "react"

function useOutsideClose(ref, handler, useCapturePhase) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        e.stopPropagation();
        handler?.();
      }
    }

    document.addEventListener("click", handleOutsideClick, useCapturePhase);

    return () => {
      document.removeEventListener("click", handleOutsideClick, useCapturePhase);
    }
  }, [ref, handler, useCapturePhase])

  useEffect(() => {
    const handlePressEscape = (e) => {
      if (ref.current && e.key === "Escape") {
        handler();
      }
    };

    document.addEventListener("keydown", handlePressEscape, useCapturePhase);

    return () => document.removeEventListener("keydown", handlePressEscape, useCapturePhase);
  }, [ref, handler, useCapturePhase]);
}

export default useOutsideClose