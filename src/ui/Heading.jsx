import { formatDate, formatWeekDay } from "../utilities/helpers";

function Heading() {
  const currentDate = new Date();
  const weekDay = formatWeekDay(currentDate);
  const date = formatDate(currentDate);

  return (
    <div
      className={`heading w-full mt-[40px] flex flex-col justify-center gap-[10px]`}
    >
      <h1
        className={`heading_week_day flex align-middle justify-center font-bold text-7xl text-[var(--color-grey-700)]
        drop-shadow-[0_0_2px_var(--color-grey-500)] transition-[var(--main-transition)]`}
      >
        {weekDay}
      </h1>

      <h2
        className={`heading_date flex align-middle justify-center font-bold text-base text-[var(--color-grey-600)]
        drop-shadow-[0_0_1px_var(--color-grey-500)] transition-[var(--main-transition)]`}
      >
        {date}
      </h2>
    </div>
  )
}

export default Heading