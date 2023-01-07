import { WarningCircle } from "phosphor-react";
import { Button } from "../../../components/Button";
import { steps } from "./RSVP.types";

interface StepErrorProps {
  setStep: React.Dispatch<React.SetStateAction<steps>>,
  message: string;
};

export const StepError = ({setStep, message}: StepErrorProps) => {
  return (
    <div className='flex flex-col items-center gap-10'>
      <WarningCircle size={40} color="#fafafa" />
      <span className='text-brand-white font-semibold text-center'>{message}</span>
      <Button label='Preencher novamente' color='PRIMARY' onClick={() => setStep(steps.GETPHONE)}></Button>
    </div>
  )
};