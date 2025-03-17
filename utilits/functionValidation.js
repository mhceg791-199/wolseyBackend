const validateEmail = (email) => {
  const re = emailPattern;
  return re.test(email);
};

const validatePassword = (password) => {
  const re = passwordPattern;
  return re.test(password);
};
const validatePhone = (phone) => {
  const re = phonePattern;

  return re.test(phone);
};

const validateFile = (file) => {
  const re = filePattern;

  return re.test(file);
};

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phonePattern =
  /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const filePattern = /^[\w,\s-]+\.(pdf|PDF)$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export {
  validateEmail,
  validatePassword,
  validateFile,
  validatePhone,
  emailPattern,
  phonePattern,
  filePattern,
};
