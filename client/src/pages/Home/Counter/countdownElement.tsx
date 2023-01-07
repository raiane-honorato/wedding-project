export const CountdownElement = ({value, label}: {value: string; label: string}) => {
  return (
    <div className='flex flex-col items-center w-fit gap-2'>
      <span className='font-specialTitle text-3xl md:text-4xl inline text-brand-white w-fit'>{value}</span>
      <span className='inline md:text-xl text-brand-white w-fit'>{label}</span>
    </div>
  )
}