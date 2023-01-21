import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WhiteLogo from '../../assets/logo-white.png';
import { List, X } from 'phosphor-react';
import { Button } from "../Button";
import { handleClickScroll } from '../../utils/handleClickScroll';

export const Navbar = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClickForHomeSection = (elementId: string) => {
    if (location.pathname === '/') {
      handleClickScroll(elementId);
      setIsNavbarExpanded(false);
    } else {
      setTimeout(() => handleClickScroll(elementId), 300);
      navigate('/');
    }
  };

  return (
    <nav className="bg-brand-primary_lighten flex items-center justify-between px-8 lg:px-14 py-2 w-full z-50 fixed">
      <h1>
        <Link to='/' aria-label='Página inicial'>
          <img src={WhiteLogo} alt='' className='h-16' />
        </Link>
      </h1>
      <button onClick={() => setIsNavbarExpanded(!isNavbarExpanded)} aria-expanded={false} aria-controls="menu" aria-label='Menu' className='md:hidden'>
        {isNavbarExpanded
          ? <X size={32} className='text-brand-white' />
          : <List size={32} className='text-brand-white' />
        }
      </button>
      <ul className={`md:flex md:gap-5 md:items-center md:static md:flex-row z-50 flex ${isNavbarExpanded ? ' h-[calc(100vh-100%)] opacity-100' : 'invisible opacity-0 md:opacity-100 md:visible h-0 md:h-auto'} absolute top-full right-0 left-0 bottom-0 bg-brand-primary_lighten md:bg-transparent flex-col items-center gap-5 transition-all duration-300 delay-150`}>
        <li>
          <Button
            label='Nossa história'
            color="SECONDARY"
            onClick={() => handleClickForHomeSection('history')}
          />
        </li>
        <li>
          <Button
            onClick={() => setIsNavbarExpanded(false)}
            label={<Link to='/cerimony'>A cerimônia</Link>}
            color="SECONDARY"
          />
        </li>
        <li>
          <Button
            onClick={() => setIsNavbarExpanded(false)}
            label={<Link to='/best-people'>Padrinhos</Link>}
            color="SECONDARY"
          />
        </li>
        <li>
          <Button
            onClick={() => setIsNavbarExpanded(false)}
            label={<Link to='/gifts'>Presentes</Link>}
            color="SECONDARY"
          />
        </li>
        <li>
          <Button
            label='Confirme sua presença'
            color="PRIMARY"
            onClick={() => handleClickForHomeSection('RSVP')}
          />
        </li>
      </ul>
    </nav>
  );
};
