import { Title } from "../../../components/Title";
import flower1 from "../../../assets/rsvp-1.png";
import { FormEvent, ReactComponentElement, useState } from "react";
import { GetPhone } from "./GetPhone";
import { StepError } from "./StepError";
import { Loading } from "../../../components/Loading";
import { ConfirmationSuccess } from "./ConfirmationSuccess";
import { Confirmation } from "./Confirmation";
import { steps } from "./RSVP.types";
import { invitationType } from "../../../types/guestsStatus.types";

const mockedInvitationInformation = {
  "hash": "4c3ad170-5593-11ed-b23c-8b0b2dd1a97f",
  "name": "Família da noiva",
  "qrCode": "https://chart.googleapis.com/chart?cht=qr&chs=320x320&chl=4c3ad170-5593-11ed-b23c-8b0b2dd1a97f&chld=L|1",
  "ddi": "+55",
  "phone": "19987270863",
  "guests": [
    {
      "id": 10034310,
      "name": "Maria José",
      "situation": "PENDING",
      "__typename": "EventInvitationGuest"
    },
    {
      "id": 10034310,
      "name": "Maria José",
      "situation": "PENDING",
      "__typename": "EventInvitationGuest"
    },
    {
      "id": 10034310,
      "name": "Maria José",
      "situation": "PENDING",
      "__typename": "EventInvitationGuest"
    },
    {
      "id": 10034310,
      "name": "Maria José",
      "situation": "PENDING",
      "__typename": "EventInvitationGuest"
    },
    {
      "id": 10034310,
      "name": "Maria José",
      "situation": "PENDING",
      "__typename": "EventInvitationGuest"
    },
    {
      "id": 10034310,
      "name": "Maria José",
      "situation": "PENDING",
      "__typename": "EventInvitationGuest"
    },
    {
      "id": 9467963,
      "name": "Raiane Silva Honorato",
      "situation": "CONFIRMED",
      "__typename": "EventInvitationGuest"
    }
  ],
  "__typename": "EventInvitation"
};

export const RSVP = () => {
  const [step, setStep] = useState<steps>(steps.GETPHONE);
  const [invitationInformation, setInvitationInformation] = useState<invitationType | null>(null);
  // const [invitationInformation, setInvitationInformation] = useState<invitationType | null>(mockedInvitationInformation);

  const stepComponent: { [key in steps]: JSX.Element } = {
    [steps.GETPHONE]: <GetPhone setStep={setStep} setInvitationInformation={setInvitationInformation} />,
    [steps.PHONEERROR]: <StepError setStep={setStep} message={'Este telefone não foi encontrado!'} />,
    [steps.LOADING]: <Loading customClass='w-32' />,
    [steps.CONFIRMATION]: invitationInformation ? <Confirmation setStep={setStep} invitationInformation={invitationInformation as invitationType} /> : <StepError setStep={setStep} message={'Este telefone não foi encontrado!'} />,
    [steps.CONFIRMATIONERROR]: <StepError setStep={setStep} message={'Houve um erro na confirmação, tente novamente mais tarde.'} />,
    [steps.CONFIRMATIONSUCCESS]: <ConfirmationSuccess setStep={setStep} />,
  };

  return (
    <section id='RSVP' className='home-section'>
      <Title label='Confirme sua presença' customClass='z-10' />
      <div className='relative bg-brand-secondary_transparent mt-10 w-full md:w-[60vw] p-4 sm:p-10 rounded-lg min-h-[300px] flex items-center justify-center transition-all duration-700'>
        {stepComponent[step]}
        <img src={flower1} className='absolute -bottom-10 -left-20 w-40 md:w-52' alt='' />
      </div>
    </section>
  );
};
