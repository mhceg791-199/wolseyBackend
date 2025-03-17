import commuicationModel from "../../../DB/models/commuincations.model.js";
import { catchAsyncError } from "../../../middleware/catchAsyncError.js";
import { AppError } from "../../../utilits/AppError.js";
import handleFileUploads from "../../../utilits/fileUpload/handelFileUpload.js";
import sendEmail from "../../../utilits/sendEmail/sendEmail.js";

const createCommunication = catchAsyncError(async (req, res, next) => {
  console.log("I am here");

  const fileFields = ["document"];
  req.body = { ...req.body, ...handleFileUploads(req.files, fileFields) };
  let result = new commuicationModel(req.body);
  await result.save();
  await sendEmail(result);

  res.status(200).send({ message: "success", result });
});

const getAllCommunication = catchAsyncError(async (req, res, next) => {
  const result = await commuicationModel.find();
  !result && next(new AppError("can't find any communication"));
  res.status(200).send({ message: "success", result });
});

export { createCommunication, getAllCommunication };
