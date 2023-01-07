import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import gifts from '../../assets/data/gifts.json';
import { useNavigate, useParams } from "react-router-dom";
import { Gift } from "../../domains/gift.type";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../../components/Button";
import * as Dialog from '@radix-ui/react-dialog';
import { services } from "../../services";
import { useState } from "react";
import { GiftInformationType, ModalState, PaymentInformationType } from "./GiftsPage.types";
import { GiveGiftModal } from "./GiveGiftModal";
import io from 'socket.io-client';

const initialPaymentInformation: PaymentInformationType = {
  id: null,
  date_created: null,
  date_of_expiration: null,
  transaction_amount: 0,
  transaction_data: {
    qr_code: '',
    qr_code_base64: null
  }
}

const socket = io(import.meta.env.VITE_API_LINK);

socket.on('payment_update', (paymentUpdate: any) => {
  console.log('payment', paymentUpdate);
})

export const GiftPage = () => {
  const { giftId } = useParams();
  const gift = giftId && getGift(giftId);

  if (!gift) {
    const navigate = useNavigate();
    navigate('/gifts');
    return;
  }

  const [paymentInformation, setPaymentInformation] = useState<PaymentInformationType>(initialPaymentInformation);
  const [modalState, setModalState] = useState<ModalState>(ModalState.GIFT_INFORMATION);
  const backupQrCode = import.meta.env.VITE_BACKUP_QR_CODE;

  const handleCreatePayment = async (giftInformation: GiftInformationType) => {
    setModalState(ModalState.LOADING);
    try {
      const response = await services.createPayment(gift.value, giftInformation.message, {
        email: giftInformation.mail,
        first_name: giftInformation.name
      });
      setPaymentInformation(response.data);
      setModalState(ModalState.PAYMENT);
    } catch (error) {
      setPaymentInformation((paymentInformation) => (
        {
          ...paymentInformation,
          transaction_amount: gift.value, transaction_data: { qr_code: backupQrCode, qr_code_base64: null }
        }
      ))
      setModalState(ModalState.PAYMENT);
      throw (error);
    }
  }

  return (
    <div>
      <Navbar />
      <section className='w-full pt-[110px] md:pt-[80px] md:pr-8 px-6 md:px-0 mb-20 md:mb-0 flex flex-col md:flex-row items-center md:justify-between gap-10 min-h-screen md:bg-brand-primary_transparent'>
        <div className='w-full h-[40vh] md:w-[55%] md:h-screen bg-brand-white overflow-hidden flex items-center justify-center'>
          <img className='h-full w-auto max-w-none' alt={gift.description} src={gift.img} />
        </div>
        <div className='md:w-[45%] flex flex-col gap-5 items-start '>
          <h3 className='font-semibold text-xl'>{gift.title}</h3>
          <span className='font-extrabold text-3xl'>{formatCurrency(gift.value)}</span>
          <p>{gift.description}</p>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button label='Dar presente'></Button>
            </Dialog.Trigger>
            <GiveGiftModal gift={gift} handleCreatePayment={handleCreatePayment} modalState={modalState} paymentInformation={paymentInformation} />
          </Dialog.Root>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const getGift = (giftId: string): Gift | undefined => (
  gifts.find(gift => gift.id === giftId)
)
