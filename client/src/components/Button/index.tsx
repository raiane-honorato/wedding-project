import { ReactNode } from "react";

interface ButtonProps {
  label: string | ReactNode;
  color?: 'PRIMARY' | 'SECONDARY' | 'PRIMARY-TRANSPARENT';
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  customClass?: string;
};

export const Button = ({ label, color, onClick = () => { }, type, disabled = false, customClass = '' }: ButtonProps) => {
  const setColorsClasses = () => {
    switch (color) {
      case 'SECONDARY':
        return 'bg-transparent hover:bg-brand-secondary_lighten active:bg-brand-secondary_dark text-brand-white'
      case 'PRIMARY-TRANSPARENT':
        return 'bg-transparent border-brand-primary-main border-2 hover:bg-brand-primary-200 hover:text-brand-white active:bg-brand-primary-300 text-brand-primary-main'
      case 'PRIMARY':
      default:
        return 'bg-brand-primary-main hover:bg-brand-primary-200 active:bg-brand-primary-300 text-brand-white disabled:hover:bg-brand-primary-main'
    }

  };

  return (
    <button disabled={disabled} onClick={onClick} type={type} className={`rounded-lg py-3 px-[10px] disabled:opacity-60 ${setColorsClasses()} ${customClass}`}>
      <span >{label}</span>
    </button>
  );
};
