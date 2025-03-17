import { AppError } from "../utilits/AppError.js";
import candidateRouter from "./modules/cadidate/candidate.router.js";
import commuincationRouter from "./modules/communication/communication.router.js";
import express from "express";
import projectRouter from "./modules/project/project.route.js";
export function init(app) {
  app.use("/uploads", express.static("uploads"));
  app.use("/v1/api/communication", commuincationRouter);
  app.use("/v1/api/candidate", candidateRouter);
  app.use("/v1/api/project", projectRouter);
  
  app.all("*", (req, res, next) => {
    next(new AppError(`can't find this route ${req.originalUrl}`, 404));
  });
}
