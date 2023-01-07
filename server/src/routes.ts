import express from "express";
import { io } from "./server";
import { createPayment } from "./use-cases/createPayment";
import { getInvitationByHash } from "./use-cases/getInvitationByHash";
import { getInvitationsByEventHash } from "./use-cases/getInvitationsByEventHash";
import { updateEventInvitationGuestSituation } from "./use-cases/updateEventInvitationGuest";

export const routes = express.Router();

routes.get("/invitation/:phone", async (req, res) => {
  const { phone } = req.params;
  try {
    const invitationsList = await getInvitationsByEventHash(
      phone,
      process.env.EVENT_HASH || ""
    );
    const invitationHash = invitationsList[0].hash;

    const data = await getInvitationByHash(invitationHash);

    return res.status(200).send(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send(error.message);
    }
  }
});

routes.post("/invitation", async (req, res) => {
  const { invitationHash, guestsStatusList } = req.body;
  try {
    const data = await updateEventInvitationGuestSituation(
      invitationHash,
      guestsStatusList
    );
    return res.status(200).send(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send(error.message);
    }
  }
});

routes.post("/payment", async (req, res) => {
  const { transaction_amount, description, payer } = req.body;
  try {
    const data = await createPayment(transaction_amount, description, payer);
    return res.status(201).send(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send(error.message);
    }
  }
});

routes.post("/payment-webhook", async (req, res) => {
  io.emit("payment_update", req.body);
});
