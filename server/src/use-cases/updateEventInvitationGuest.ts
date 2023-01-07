const axios = require('axios');

type guestItemType = {
  id: string;
  situation: 'CANCELED' | 'CONFIRMED'
}

type guestStatusListType = Array<guestItemType>;

export const updateEventInvitationGuestSituation = async (invitationHash: string, guestsStatusList: guestStatusListType) => {
  const url = process.env.API_LINK;
  let res;
  try {
    res = await axios.post(url, {
      operationName: null,
      variables: {
        invitationHash,
        data: guestsStatusList
      },
      query:
      "mutation ($invitationHash: String!, $data: [EventInvitationGuestAllSituationInput]!, $transferId: Int) {\n  updateEventInvitationGuestAllSituation(invitationHash: $invitationHash, data: $data, transferId: $transferId) {\n    id\n    situation\n    __typename\n  }\n}\n",
    });
  } catch(error) {
    throw error;
  }

  return res.data.data.updateEventInvitationGuestAllSituation;
}