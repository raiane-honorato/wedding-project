const axios = require('axios');

export const getInvitationByHash = async (hash: string) => {
  const url = process.env.API_LINK;
  let res;
  try {
    res = await axios.post(url, {
      operationName: null,
      variables: {
        hash
      },
      query:
      "query ($hash: String!) {  invitationByHash(hash: $hash) {    hash    name    qrCode    ddi    phone    guests {      id      name      situation      __typename    }    __typename  }}",
    });
  } catch(error) {
    throw error;
  }

  return res.data.data.invitationByHash;
}