import { useThemeMode } from "../context/ThemeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

function ThemeBtn() {
  const {isDark, toggleTheme} = useThemeMode()

  function handleClickLight() {
    if (isDark) toggleTheme();
  }

  function handleClickDark() {
    if (!isDark) toggleTheme();
  }

  return (
    <div
      className={`theme drop-shadow-[0_1px_1px_var(--color-grey-500)] text-[20px] transition-[var(--main-transition)]
      text-[var(--color-grey-900)] font-bold absolute top-[-25px] right-[15px] flex items-center gap-[10px] z-[9999]`}
    >
      <HiOutlineSun
        className={`theme_light_icon cursor-pointer transition-[var(--main-transition)]`}
        onClick={handleClickLight}
      />
      <span 
        className={`theme_bar w-[60px] relative h-[18px] rounded-[20px] bg-[var(--color-grey-800)] p-1 flex items-center
        ${isDark ? "justify-end" : "justify-start"} cursor-pointer transition-[var(--main-transition)]`}
        onClick={toggleTheme}
      >
        <span
          className={`theme_bar_ball h-[14px] w-[14px] bg-[var(--color-grey-200)] rounded-[50%] cursor-pointer
          transition-[var(--main-transition)]`}
        />
      </span>
      <HiOutlineMoon 
        className={`theme_dark_icon cursor-pointer transition-[var(--main-transition)]`}
        onClick={handleClickDark}
      />
    </div>
  )
}

export default ThemeBtn