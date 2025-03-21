import candidateModel from "../../../DB/models/application.model.js";
import { catchAsyncError } from "../../../middleware/catchAsyncError.js";
import { AppError } from "../../../utilits/AppError.js";
import sendEmail from "../../../utilits/sendEmail/sendEmail.js";
import candidateSubmissionTemplate from "../../../utilits/sendEmail/templetes/candidateSubmissionTemplate.js";

const createcandidate = catchAsyncError(async (req, res, next) => {
  req.body.cv = `http://92.113.31.133:3010/uploads/cv/${req.files.cv[0].filename}`;
  const { websiteName } = req.body;
  let result = new candidateModel(req.body);
  await result.save();
  console.log("====================================");
  console.log(`result = ${result}`);
  console.log("====================================");
  await sendEmail(candidateSubmissionTemplate(result), websiteName);

  res.status(200).send({ message: "success", result });
});

const getAllcandidate = catchAsyncError(async (req, res, next) => {
  const result = await candidateModel.find();
  !result && next(new AppError("can't find any candidate"));
  res.status(200).send({ message: "success", result });
});

export { createcandidate, getAllcandidate };
