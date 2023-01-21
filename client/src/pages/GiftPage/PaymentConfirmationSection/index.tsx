import { PaymentInformationType } from "../GiftsPage.types";
import gif1 from '../../../assets/thank-you-gift/gif1.gif';
import gif2 from '../../../assets/thank-you-gift/gif2.gif';
import gif3 from '../../../assets/thank-you-gift/gif3.gif';
import gif4 from '../../../assets/thank-you-gift/gif4.gif';
import gif5 from '../../../assets/thank-you-gift/gif5.gif';
import gif6 from '../../../assets/thank-you-gift/gif6.gif';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

interface PaymentConfirmationSectionProps {
  paymentInformation: PaymentInformationType
};

export const PaymentConfirmationSection = ({ paymentInformation }: PaymentConfirmationSectionProps) => {

  const randomGif = Math.floor(Math.random() * 6) + 1;

  const setGif = () => {
    switch (randomGif) {
      case 1: return gif1
      case 2: return gif2
      case 3: return gif3
      case 4: return gif4
      case 5: return gif5
      default: return gif6
    }
  };

  const gif = setGif();

  return (
    <div className='h-full flex flex-col '>
      <div className='relative'>
        <Dialog.Close asChild>
          <button aria-label='fechar modal' className='absolute right-0'>
            <X size={32} className='text-brand-primary-main hover:text-brand-primary-200' />
          </button>
        </Dialog.Close>
        <h3 className='text-lg font-semibold max-w-[80%] mb-2'>Já recebemos seu presente 🎉</h3>
      </div>
      <div className='flex flex-col items-center gap-1 justify-center h-full'>
        <img src={gif} alt='' className='h-[300px]' />
        <p className='max-w-[80%] mt-5'>Obrigada pelo presente! Te esperamos na festa, ein?</p>
      </div>
    </div>
  )
}