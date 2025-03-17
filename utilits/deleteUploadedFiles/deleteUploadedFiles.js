import fs from "fs";
import path from "path";
const deleteUploadedFiles = async (files) => {
  for (const fieldName in files) {
    for (const file of files[fieldName]) {
      const url = path.join(
        process.cwd(),
        "uploads",
        "projects",
        file.filename
      );
      await fs.unlink(url, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
};

export default deleteUploadedFiles;
