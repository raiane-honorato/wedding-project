const axios = require("axios");

type payerType = {
  email: string;
  first_name?: string;
};

export const createPayment = async (
  transaction_amount: number,
  description: string,
  payer: payerType
) => {
  const url = process.env.PIX_API_LINK;
  let res;
  let body = {
    transaction_amount,
    description,
    payment_method_id: "pix",
    notification_url: `${process.env.PRODUCTION_URL}/payment-webhook`,
    payer,
  };

  try {
    res = await axios.post(url, body, {
      headers: {
        Authorization: process.env.PIX_TOKEN,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }

  const {
    id,
    date_created,
    date_of_expiration,
    point_of_interaction: {
      transaction_data: { qr_code, qr_code_base64 },
    },
  } = res.data;

  return {
    id,
    date_created,
    date_of_expiration,
    transaction_amount,
    transaction_data: {
      qr_code,
      qr_code_base64,
    },
  };
};
