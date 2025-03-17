import deleteUploadedFiles from "../utilits/deleteUploadedFiles/deleteUploadedFiles.js";


export const validation = (schema) => {
  return async (req, res, next) => {
    let input = {
      ...req.body,
      ...req.params,
      ...req.query,
      ...req.files,
      ...req.file,
    };

    let { error } = schema.validate(input, { abortEarly: false });
    if (error) {
      await deleteUploadedFiles(req.files);
      let errors = error.details.map((detail) => detail.message);
      res.status(500).json(errors);
      console.log(req.files);
    } else {
      next();
    }
  };
};
