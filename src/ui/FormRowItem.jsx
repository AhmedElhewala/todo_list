function FormRowItem({label, children, error}) {
  return (
    <div
      className={`form_row_item w-full flex flex-col gap-[10px] flex-wrap relative text-[var(--color-grey-800)] transition-[var(--main-transition)]`}
    >
      <div
        className={`form_row_input_label_container w-full flex items-center justify-center gap-[10px] transition-[var(--main-transition)]`}
      >
        <label
          htmlFor={children.props.id}
          className={`form_row_item_label flex-grow font-bold text-[14px]`}
          >
          {label}
        </label>
        {children}
      </div>

      {error &&
        <span
          className={`form_row_error w-full text-sm text-red-400 pl-[20%] tracking-[0.5px] font-bold`}
        >
          {error}
        </span>
      }
    </div>
  )
}

export default FormRowItem