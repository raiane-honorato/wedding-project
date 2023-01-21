import { GithubLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react';
import WhiteLogo from '../../assets/logo-white.png';
import Confetti from '../../assets/confetti.gif';
import { useState } from 'react';

export const Footer = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleShowEasterEgg = () => {
    setShowEasterEgg(true);
    setTimeout(() => {
      setShowEasterEgg(false);
    }, 1000);
  }
  return (
    <footer className='bg-brand-primary-main p-4 sm:p-10 flex gap-10 items-center'>
      <img src={WhiteLogo} alt='' className='w-32' />
      <div className='flex flex-col gap-2'>
        <h5 className='font-mainTitle text-brand-white text-3xl sm:text-4xl'>{'Casamento de raiane e lucas <3'}</h5>
        <span className='text-brand-white text-sm sm:text-base' onClick={handleShowEasterEgg}>Site feito com ♥ pela noiva</span>
        <div className='flex gap-2'>
          <a href='https://www.instagram.com/_rai_h/' target="_blank">
            <InstagramLogo size={24} className='text-brand-white hover:text-brand-secondary_dark hover:-translate-y-1 transition duration-150' />
          </a>
          <a href='http://api.whatsapp.com/send?1=pt_BR&phone=5519987270863' target="_blank">
            <WhatsappLogo size={24} className='text-brand-white hover:text-brand-secondary_dark hover:-translate-y-1 transition duration-150' />
          </a>
          <a href='https://github.com/raiane-honorato' target="_blank">
            <GithubLogo size={24} className='text-brand-white hover:text-brand-secondary_dark hover:-translate-y-1 transition duration-150' />
          </a>
        </div>
      </div>
      <img src={Confetti} alt='' className={`fixed top-0 h-[100vh] ${showEasterEgg ? 'visible opacity-100' : 'hidden opacity-0'} transition-all`} />
    </footer>
  );
};
