import { Navbar } from "../../../components/Navbar";
import imgHeader from "../../../assets/header2.png";

export const Header = () => {
  return (
    <header className='relative w-full h-[90vh] overflow-x-hidden'>
      <div className='absolute h-full w-full overflow-hidden flex items-center justify-center'>
        <img src={imgHeader} alt='' className='h-full max-w-none lg:w-full lg:h-auto' />
      </div>
      <Navbar />
      <div className='absolute left-[10vw] bottom-32'>
        <h2 className='font-mainTitle text-brand-white text-7xl md:text-9xl'>{'Raiane & Lucas'}</h2>
        <h3 className='font-specialTitle text-brand-white text-3xl md:text-5xl'>22 de abril de 2023</h3>
      </div>
    </header>
  );
};
