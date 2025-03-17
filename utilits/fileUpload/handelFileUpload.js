const handleFileUploads = (files, fileFields) => {
  const fileData = {};
  
  fileFields.forEach((field) => {
    if (files[field]) {
      fileData[field] = files[field][0]?.filename;
    }
  });
  return fileData;
};

export default handleFileUploads;
