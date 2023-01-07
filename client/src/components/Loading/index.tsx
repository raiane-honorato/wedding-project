import logo from '../../assets/logo-main-color.png';
import whiteLogo from '../../assets/logo-white.png';

interface LoadingProps {
  color?: 'WHITE' | 'PRIMARY';
  customClass?: string;
}

export const Loading = ({ color = 'WHITE', customClass }: LoadingProps) => {
  const srcLogo = color === 'PRIMARY' ? logo : whiteLogo;

  return (
    <img src={srcLogo} className={`animate-pulse-logo w-14 ${customClass || ''}`} alt='carregando' />
  )
};