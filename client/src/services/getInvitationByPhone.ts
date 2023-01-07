import { request } from "./request";

export const getInvitationByPhone = (phone: string) => (
  request.get(`invitation/${phone}`)
);