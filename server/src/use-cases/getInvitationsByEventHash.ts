const axios = require('axios');

type eventType = {
  hash: string;
  name: string;
  phone: string;
  "__typename": string;
};

export const getInvitationsByEventHash = async (phone: string, eventHash: string) => {
  const url = process.env.API_LINK;
  let res;
  try {
    res = await axios.post(url, {
      operationName: null,
      variables: {
        eventHash,
        filter: {
          phone
        },
      },
      query:
        "query ($eventHash: String!, $filter: EventInvitationFilter!) {invitationsByEventHash(eventHash: $eventHash, filter: $filter) {  hash  name  phone  __typename}}",
    });
  } catch(error) {
    throw error;
  }

  return res.data.data.invitationsByEventHash as Array<eventType>;
}