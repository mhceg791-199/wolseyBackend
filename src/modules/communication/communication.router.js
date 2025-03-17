import { Router } from "express";
import * as communication from "../communication/communication.controller.js";
import {
  uploadMixfile,
  uploadSingleFile,
} from "../../../middleware/fileUpload.js";
// import { createCommunicationSchmea } from "./communication.validation.js";
const commuincationRouter = Router();

commuincationRouter
  .route("/")
  .post(
    uploadMixfile([{ name: "document", maxCount: 1 }], "communicationFolder"),
    // validation(createCommunicationSchmea),
    communication.createCommunication
  )
  .get(communication.getAllCommunication);

export default commuincationRouter;
