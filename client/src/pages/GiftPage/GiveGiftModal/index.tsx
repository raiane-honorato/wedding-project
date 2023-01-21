import * as Dialog from '@radix-ui/react-dialog';
import { Loading } from '../../../components/Loading';
import { Gift } from '../../../domains/gift.type';
import { GiftInformationSection } from '../GiftInformationSection';
import { GiftInformationType, ModalState, PaymentInformationType } from '../GiftsPage.types';
import { PaymentConfirmationSection } from '../PaymentConfirmationSection';
import { PaymentSection } from '../PaymentSection';

interface GiveGiftModalProps {
  gift: Gift;
  handleCreatePayment: (giftInformation: GiftInformationType) => void;
  modalState: ModalState;
  paymentInformation: PaymentInformationType;
}

const mockPaymentInfo = {
  "id": 53262400542,
  "date_created": "2023-01-03T20:11:19.582-04:00",
  "date_of_expiration": "2023-01-04T20:11:19.426-04:00",
  "transaction_amount": 79,
  "transaction_data": {
    "qr_code": "00020126580014br.gov.bcb.pix0136abe3df4d-2053-4e02-aeb0-66beca709900520400005303986540579.005802BR5916RAIANEHONORATO166009Sao Paulo62240520mpqrinter532624005426304B93F",
    "qr_code_base64": "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"
  }
};

export const GiveGiftModal = ({ gift, handleCreatePayment, modalState, paymentInformation }: GiveGiftModalProps) => {

  const stepComponent: { [key in ModalState]: JSX.Element } = {
    [ModalState.GIFT_INFORMATION]: <GiftInformationSection gift={gift} handleCreatePayment={handleCreatePayment} />,
    [ModalState.LOADING]: <Loading color={'PRIMARY'} customClass='mx-auto w-[30%]' />,
    [ModalState.PAYMENT]: <PaymentSection paymentInformation={paymentInformation} />,
    [ModalState.PAYMENT_COMPLETED]: <PaymentConfirmationSection paymentInformation={paymentInformation} />,
    // [ModalState.PAYMENT]: <PaymentSection paymentInformation={mockPaymentInfo} />,
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-brand-primary_transparent fixed inset-0 transition-all z-[100]' />
      <Dialog.Content className='bg-brand-white rounded-sm shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:max-w-[800px] h-[90vh] sm:h-[570px] overflow-y-auto p-8 z-[101] flex flex-col items-stretch justify-center'>
        {stepComponent[modalState]}
        {/* {stepComponent[ModalState.PAYMENT]} */}
        {/* {stepComponent[ModalState.PAYMENT_COMPLETED]} */}
      </Dialog.Content>
    </Dialog.Portal>
  )
}