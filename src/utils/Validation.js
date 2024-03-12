/* eslint-disable no-unused-vars */
export const Validation = (userName, email, password) => {
  const isValidateEmail =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const isValidatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isValidateUserName = userName
    ? /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
        userName
      )
    : true;

  if (!isValidateEmail) return "E-mail id is not valid !!!";
  if (!isValidatePassword) return "password  is not valid !!!";
  if (!isValidateUserName) return "userName  is not valid !!!";

  return null;
};
