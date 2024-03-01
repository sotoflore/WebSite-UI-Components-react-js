
const Title = ( {title} ) => {
  return (
    <h2 className='text-3xl font-extrabold text-blue-600'>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-500">
            {title}
        </span>
    </h2>
  )
}
export default Title;