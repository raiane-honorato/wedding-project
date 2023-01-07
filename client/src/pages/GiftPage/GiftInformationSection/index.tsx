import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Button } from '../../../components/Button';
import { Gift } from '../../../domains/gift.type';
import { GiftInformationType } from '../GiftsPage.types';

interface GiftInformationSectionProps {
  gift: Gift;
  handleCreatePayment: (giftInformation: GiftInformationType) => void;
};

export const GiftInformationSection = ({ gift, handleCreatePayment }: GiftInformationSectionProps) => {
  const initialGiftInformation: GiftInformationType = {
    name: '',
    mail: '',
    message: ''
  };

  const [giftInformation, setGiftInformation] = useState<GiftInformationType>(initialGiftInformation);

  const updateGiftInformation = (value: string, type: keyof typeof initialGiftInformation) => {
    setGiftInformation((state) => ({ ...state, [type]: value }))
  };

  const isGiftInformationValid = {
    name: giftInformation.name !== '',
    mail: !!giftInformation.mail.match(/@([^\.]*)\.([^\.]{2,})/g)
  };

  const isButtonEnabled = isGiftInformationValid.name && isGiftInformationValid.mail;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreatePayment(giftInformation);
  };

  return (
    <div className='h-full flex flex-col justify-around'>
      <div className='relative'>
        <Dialog.Close asChild>
          <button aria-label='fechar modal' className='absolute right-0'>
            <X size={32} className='text-brand-primary-main hover:text-brand-primary-200' />
          </button>
        </Dialog.Close>
        <h3 className='text-lg font-semibold max-w-[80%] mb-2'>Agradecemos pelo presente!</h3>
        <p className='max-w-[80%]'>Preencha as informações abaixo para seguir para o pagamento:</p>
      </div>
      <form className='flex flex-col gap-5 mt-6' onSubmit={onSubmit}>
        <label>
          <p>Nome completo:</p>
          <input type='text' value={giftInformation.name} onChange={(event) => updateGiftInformation(event.target.value, 'name')} className='w-full p-2 border-2 border-lg rounded-md border-brand-primary_lighten hover:border-brand-primary-main outline-brand-primary-300' />
        </label>
        <label>
          <p>E-mail:</p>
          <input type='email' value={giftInformation.mail} onChange={(event) => updateGiftInformation(event.target.value, 'mail')} className='w-full p-2 border-2 border-lg rounded-md border-brand-primary_lighten hover:border-brand-primary-main outline-brand-primary-300' />
          <span className={`text-red-800 ${isGiftInformationValid.mail || giftInformation.mail === '' ? 'invisible' : 'visible'}`}>* E-mail inválido!</span>
        </label>
        <label>
          <p>Mensagem para o casal:</p>
          <textarea value={giftInformation.message} onChange={(event) => updateGiftInformation(event.target.value, 'message')} className='w-full p-2 border-2 border-lg rounded-md border-brand-primary_lighten hover:border-brand-primary-main outline-brand-primary-300 resize-none' />
        </label>
        <Button type='submit' label='Ir para pagamento' color='PRIMARY' disabled={!isButtonEnabled}></Button>
      </form>
    </div>
  )
};