import branch from "../../assets/branch.png";

interface TitleProps {
  showIcon?: boolean;
  label: string;
  customClass?: string;
}

export const Title = ({showIcon = true, label, customClass = ''}: TitleProps) => {
  return (
    <h2 className={`font-mainTitle text-5xl md:text-7xl text-brand-text flex items-center gap-6 ${customClass}`}>
      {showIcon && <img src={branch} alt='' className='w-10 md-w-[55px]'/>}
      {label}
    </h2>
  )
}