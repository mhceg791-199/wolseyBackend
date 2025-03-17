import { Router } from "express";
import * as candidate from "./cadidate.controller.js";
import { uploadMixfile } from "../../../middleware/fileUpload.js";
const candidateRouter = Router();

candidateRouter
  .route("/")
  .post(
    uploadMixfile([{ name: "cv", maxCount: 1 }],"cv"),
    candidate.createcandidate
  )
  .get(candidate.getAllcandidate);

export default candidateRouter;
