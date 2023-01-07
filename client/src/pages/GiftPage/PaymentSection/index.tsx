import { PaymentInformationType } from "../GiftsPage.types"
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { ClickCopyButton } from "../../../components/ClickCopyButton";

interface PaymentSectionProps {
  paymentInformation: PaymentInformationType
};

export const PaymentSection = ({ paymentInformation }: PaymentSectionProps) => {

  const { transaction_amount: value, transaction_data: { qr_code, qr_code_base64 } } = paymentInformation;
  return (
    <div className='h-full flex flex-col justify-between'>
      <div className='relative'>
        <Dialog.Close asChild>
          <button aria-label='fechar modal' className='absolute right-0'>
            <X size={32} className='text-brand-primary-main hover:text-brand-primary-200' />
          </button>
        </Dialog.Close>
        <h3 className='text-lg font-semibold max-w-[80%] mb-2'>Uhuul! Mensagem criada com sucesso :)</h3>
        <p className='max-w-[80%]'>Agora é só fazer o pagamento do seu presente com o código PIX abaixo. Seu PIX vai direto para a conta do casal:</p>
      </div>
      <div className='flex flex-col items-center gap-1'>
        <img src={`data:image/png;base64, ${qr_code_base64}`} alt='' className='h-[300px]' />
        <div className='bg-brand-primary_transparent p-4 flex flex-col justify-between md:flex-row gap-4 w-full'>
          <span style={{ wordBreak: 'break-all' }} className='w-[85%]'>{qr_code}</span>
          <ClickCopyButton message={qr_code} />
        </div>
        <p>Esse código é válido por 24h!</p>
      </div>
    </div>
  )
}