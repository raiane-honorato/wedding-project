import { Confetti } from "phosphor-react";
import { Button } from "../../../components/Button";
import { steps } from "./RSVP.types";

interface ConfirmationSuccessProps {
  setStep: React.Dispatch<React.SetStateAction<steps>>,
};

export const ConfirmationSuccess = ({setStep}: ConfirmationSuccessProps) => {
  return (
    <div className='flex flex-col items-center gap-10'>
      <Confetti size={40} color="#fafafa" />
      <span className='text-brand-white font-semibold text-center block'>Confirmação concluída com sucesso!</span>
      <span className='text-brand-white text-center'>Você poderá mudar sua resposta caso necessário até 01/03/2023 :)</span>
      <Button label='Fazer outra confirmação' color='PRIMARY' onClick={() => setStep(steps.GETPHONE)}></Button>
    </div>
  )
};