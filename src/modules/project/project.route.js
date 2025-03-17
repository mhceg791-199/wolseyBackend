import { Router } from "express";
import {
  createProject,
  deleteAllProjects,
  deleteProject,
  getAllProjects,
} from "./project.controll.js";
import { uploadMixfile } from "../../../middleware/fileUpload.js";
import { projectSchema } from "./project.validation.js";
import { validation } from "../../../middleware/validation.js";

const projectRouter = Router();

projectRouter
  .route("/")
  .get(getAllProjects)
  .post(
    uploadMixfile(
      [
        { name: "mainImg", maxcount: 1 },
        { name: "gallery", maxcount: 10 },
      ],
      "projects"
    ),
    validation(projectSchema),
    createProject
  )
  .delete(deleteAllProjects);
projectRouter.route("/:id").get(getAllProjects).delete(deleteProject);

export default projectRouter;
