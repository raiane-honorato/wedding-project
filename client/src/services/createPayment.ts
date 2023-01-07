import { request } from "./request";

type payerType = {
  email: string;
  first_name?: string;
  last_name?: string;
}

export const createPayment = (transaction_amount: number, description: string, payer: payerType) => (
  request.post('payment', {
    transaction_amount,
    description,
    payer
  })
);