
import { guestsStatusType } from "../types/guestsStatus.types";
import { request } from "./request";

export const updateInvitation = (invitationHash: string, guestsStatusList: guestsStatusType ) => (
  request.post('invitation', {
    invitationHash,
    guestsStatusList
  })
);