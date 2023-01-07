import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../../components/Button";
import { services } from "../../../services";
import { guestSituation, guestsStatusType, invitationType } from "../../../types/guestsStatus.types";
import { steps } from "./RSVP.types";

interface ConfirmationProps {
  setStep: React.Dispatch<React.SetStateAction<steps>>,
  invitationInformation: invitationType,
}

export const Confirmation = ({
  setStep, 
  invitationInformation
}: ConfirmationProps) => {
  const initialGuestsStatus = invitationInformation.guests.map(guest => ({id: guest.id, situation: guest.situation})) as guestsStatusType;
  const [guestsStatus, setGuestsStatus] = useState<guestsStatusType>(initialGuestsStatus);

  const isInputValid = !guestsStatus.some(guest => guest.situation === guestSituation.PENDING);

  const situationLabel: {[key in guestSituation]: string} = {
    [guestSituation.CANCELED]: 'Não comparecerá',
    [guestSituation.CONFIRMED]: 'Comparecerá',
    [guestSituation.PENDING]: 'Pendente',
  };

  const onChangeInput = (guestIndex: number, guestStatus: guestSituation) => {
    let items = [...guestsStatus];
    let item = {...guestsStatus[guestIndex]};
    item.situation = guestStatus;

    items[guestIndex] = item;

    setGuestsStatus(items);
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setStep(steps.LOADING);

      await services.updateInvitation(invitationInformation.hash, guestsStatus);

      setStep(steps.CONFIRMATIONSUCCESS);
    } catch(error) {
      setStep(steps.CONFIRMATIONERROR);
    };
  };

  return (
  <div className='flex flex-col items-center gap-8 w-full'>
    <span className='text-brand-white text-center'>
      Convite encontrado: <span className='font-semibold block'>{invitationInformation?.name}</span>
    </span>
    
    <form className='flex flex-col gap-8 items-center w-full' onSubmit={onSubmit}>
      <div className='flex flex-col gap-3 items-center max-h-64 overflow-y-auto p-2 w-full'>
        {invitationInformation?.guests.map((guest, index) => (
          <div key={`guest-${index}`} className='flex flex-col'>
            <label className='font-bold text-brand-white'>{guest.name}:</label>

            <div className='flex flex-wrap min-[480px]:gap-4'>
              <label className='text-brand-white flex gap-2'>
                <input type='radio' value={guestSituation.CONFIRMED} checked={guestsStatus[index].situation === guestSituation.CONFIRMED} onChange={() => onChangeInput(index, guestSituation.CONFIRMED)}/>
                {situationLabel[guestSituation.CONFIRMED]}
              </label>

              <label className='text-brand-white flex gap-2'>
                <input type='radio' value={guestSituation.CANCELED} checked={guestsStatus[index].situation === guestSituation.CANCELED} onChange={() => onChangeInput(index, guestSituation.CANCELED)}/>
                {situationLabel[guestSituation.CANCELED]}
              </label>
            </div>
          </div>
        ))}
      </div>
      
      <Button type='submit' label='Submeter' color='PRIMARY' disabled={!isInputValid}></Button>
    
    </form>
  </div>
  )
};