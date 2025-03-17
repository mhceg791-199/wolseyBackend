import multer from "multer";
import path from "path";
import sanitize from "sanitize-filename"; // Import sanitize-filename to clean filenames
import { transliterate } from "transliteration"; // Import transliteration to convert non-ASCII characters

// Function to configure multer for file uploads
const option = (folderName) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Set the destination folder for uploads
      cb(null, `uploads/${folderName}`);
    },
    filename: function (req, file, cb) {
      // Get the original file extension
      const fileExtension = path.extname(file.originalname);
      // Transliterate the original file name to remove non-ASCII characters
      const baseName = transliterate(
        path.basename(file.originalname, fileExtension)
      );
      // Sanitize the transliterated file name to remove any special characters
      const sanitizedBaseName = sanitize(baseName);
      // Generate a unique suffix
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      // Create a new file name using sanitized name and extension
      cb(null, `${sanitizedBaseName}-${uniqueSuffix}${fileExtension}`);
    },
  });

  // Filter to allow images, PDFs, and DOC/DOCX files
  function fileFilter(req, file, cb) {
    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/svg+xml",
      "application/pdf",
      "application/msword", // for .doc files
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // for .docx files
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error("Only images, PDFs, DOC, and DOCX files are allowed"),
        false
      );
    }
  }

  return multer({ storage, fileFilter });
};

// Function to handle single file upload
export const uploadSingleFile = (fieldName, folderName) =>
  option(folderName).single(fieldName);

// Function to handle mixed file upload (multiple fields)
export const uploadMixfile = (arrayOfFields, folderName) =>
  option(folderName).fields(arrayOfFields);
