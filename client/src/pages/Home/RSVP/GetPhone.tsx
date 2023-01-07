import { Button } from "../../../components/Button";
import InputMask from 'react-input-mask';
import { FormEvent, useState } from "react";
import { services } from "../../../services";
import { steps } from "./RSVP.types";
import { invitationType } from "../../../types/guestsStatus.types";

interface GetPhoneProps {
  setStep: React.Dispatch<React.SetStateAction<steps>>,
  setInvitationInformation: React.Dispatch<React.SetStateAction<invitationType | null>>,
};

export const GetPhone = ({ setStep, setInvitationInformation }: GetPhoneProps) => {
  const initialPhoneInput = '(+55) __ _____-____';
  const [phoneInput, setPhoneInput] = useState(initialPhoneInput);

  const isInputValid = phoneInput && phoneInput.match(/_/g) == null;
  const hasInputChanged = phoneInput !== initialPhoneInput;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanPhone = phoneInput.replace(/(\(\+55\) )|( )|(-)/g, '');
    try {
      setStep(steps.LOADING);
      const response = await services.getInvitationByPhone(cleanPhone);
      setInvitationInformation(response.data as invitationType);
      setStep(steps.CONFIRMATION);
    } catch(error) {
      setStep(steps.PHONEERROR);
    };
  };

  return (
    <form className='flex flex-col gap-7 items-center max-w-full' onSubmit={onSubmit}>
      <label htmlFor='phone-input' className='font-bold text-brand-white'>Insira o telefone do convite:</label>
      <div className='flex flex-col gap-1 max-w-full'>
        <InputMask
          id='phone-input'
          mask={'(+55) 99 99999-9999'}
          value={phoneInput}
          placeholder='Telefone'
          onChange={(event) => setPhoneInput(event.target.value)}
          className={`p-2 border-2 border-lg border-brand-secondary outline-brand-primary-main ${!isInputValid && hasInputChanged && 'border-red-800 outline-red-800' }`}
        />
        <span className={`text-red-800 ${!isInputValid && hasInputChanged ? 'visible' : 'invisible'}`}>* Telefone inválido!</span>
      </div>
      <Button type='submit' label='Submeter' color='PRIMARY' disabled={!isInputValid}></Button>
    </form>
  );
};
