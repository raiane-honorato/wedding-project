export interface GiftInformationType {
  name: string;
  mail: string;
  message: string;
}

export interface PaymentInformationType {
  id: number | null;
  date_created: Date | null;
  date_of_expiration: Date | null;
  transaction_amount: number;
  transaction_data: {
    qr_code: string;
    qr_code_base64: string | null;
  };
}

export enum ModalState {
  GIFT_INFORMATION = 'GIFT_INFORMATION',
  LOADING = 'LOADING',
  PAYMENT = 'PAYMENT',
  PAYMENT_COMPLETED = 'PAYMENT_COMPLETED',
}

export interface PaymentUpdate {
  action: 'payment.created' | 'payment.updated';
  data: {
    id: string;
  };
}
