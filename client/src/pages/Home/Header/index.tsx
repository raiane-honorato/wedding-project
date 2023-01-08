import { Navbar } from "../../../components/Navbar";
import imgHeader from "../../../assets/header.png";

export const Header = () => {
  return (
    <header className='bg-header bg-no-repeat bg-cover bg-[65%] md:bg-center  h-[90vh]'>
      <Navbar />
      <div className='absolute left-[10vw] top-32'>
        <h2 className='font-mainTitle text-brand-white text-8xl md:text-9xl'>{'Raiane & Lucas'}</h2>
        <h3 className='font-specialTitle text-brand-white text-3xl md:text-5xl'>22 de abril de 2023</h3>
      </div>
    </header>
  );
};
