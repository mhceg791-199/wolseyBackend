import projectModel from "../../../DB/models/project.model.js";
import { catchAsyncError } from "../../../middleware/catchAsyncError.js";
import handleFileUploads from "../../../utilits/fileUpload/handelFileUpload.js";

export const createProject = catchAsyncError((req, res, next) => {
  const fileFields = ["mainImg", "gallery"];
  req.body = { ...req.body, ...handleFileUploads(req.files, fileFields) };
  const project = new projectModel(req.body);
  project.save();
  res.status(201).send({
    status: "success",
    data: project,
  });
});

export const editProject = catchAsyncError((req, res, next) => {});

export const deleteProject = catchAsyncError((req, res, next) => {
  const { id } = req.params;
  const project = projectModel.findByIdAndDelete(id);
  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }
  res.status(204).send({
    status: "success",
    data: { message: "Project deleted successfully" },
  });
});

export const getProject = catchAsyncError((req, res, next) => {
  const { id } = req.params;
  const project = projectModel.findById(id);
  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }
  res.status(200).send({
    status: "success",
    data: project,
  });
});

export const getAllProjects = catchAsyncError(async (req, res, next) => {
  const projects = await projectModel.find();
  res.status(200).send({
    status: "successsssssssss",
    data: projects,
  });
});

export const deleteAllProjects = catchAsyncError(async (req, res, next) => {
  const projects = await projectModel.deleteMany();
  res.status(204).send({
    status: "success",
    data: { message: "All projects deleted successfully" },
  });
});
