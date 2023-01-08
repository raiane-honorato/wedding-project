import { Navbar } from '../Navbar';
import imgHeader from "../../assets/header-gifts.png";
import flowerHeader from "../../assets/flower-header.png";
import waves from "../../assets/waves.png";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imgHeader: string;
  customImgHeaderClass?: string;
};

export const PageHeader = ({ title, subtitle, imgHeader, customImgHeaderClass }: PageHeaderProps) => {
  return (
    <div className='bg-brand-primary_lighten relative'>
      <Navbar />
      <div className='h-[calc(58vh+4rem)] md:h-[calc(70vh+4rem)] w-full max-w-[13000px] pt-[5.5rem] px-4 md:px-16 flex flex-col justify-between sm:flex-row sm:items-center gap-4 sm:gap-8 md:gap-20'>

        <div className='flex flex-col gap-4 sm:gap-10 w-[70%] sm:w-[50%]'>
          <h2 className='font-mainTitle text-5xl sm:text-7xl text-brand-white'>{title}</h2>
          <p className='text-brand-white text-sm sm:text-base max-w-[300px] md:max-w-[600px] z-10'>{subtitle}</p>
        </div>

        <div className={`relative h-fit max-h-full self-end w-[65%] sm:w-[50%] ${customImgHeaderClass}`}>
          <img alt='' src={imgHeader} className={`w-full max-w-sm translate-y-4 sm:translate-y-12 relative z-20`} />
          <img alt='' src={waves} className='absolute bottom-[15%] sm:bottom-0 left-[20%] w-[80%] -z-0' />
        </div>
      </div>

      <img src={flowerHeader} alt='' className='absolute -bottom-20 w-16 md:w-24' />
    </div>
  );
};