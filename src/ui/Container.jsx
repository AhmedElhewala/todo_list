function Container({children}) {
  return (
    <div
      className={`container px-[15px] mx-auto max-w-[610px] sm:max-w-[750px] md:max-w-[970px] lg:max-w-[1170px] relative`}
    >
      {children}
    </div>
  )
}

export default Container