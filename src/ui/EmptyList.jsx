function EmptyList() {
  return (
    <div
      className={`empty_list mx-auto w-[100%] md:w-[80%] lg:w-[60%] text-lg font-bold tracking-wide flex items-center justify-center relative`}
    >
      Your tasks list is empty, you can add tasks to do from this button above.
    </div>
  )
}

export default EmptyList