import { useState } from "react";
import { copyToClipboard } from "../../utils/copyToClipboard";

export const ClickCopyButton = ({ message }: { message: string }) => {
  const [clickedOnCopy, setClickedOnCopy] = useState(false);
  const handleClickCopy = () => {
    copyToClipboard(message);
    setClickedOnCopy(true);
    setTimeout(() => {
      setClickedOnCopy(false);
    }, 5000);
  }
  return (
    <button
      className={`font-bold text-brand-primary-main mt-2 transition-all ${clickedOnCopy ? 'text-brand-secondary_dark' : 'text-brand-primary-main underline'}`}
      onClick={handleClickCopy}
    >
      {clickedOnCopy ? 'Copiado!' : 'Copiar'}
    </button>
  )
}